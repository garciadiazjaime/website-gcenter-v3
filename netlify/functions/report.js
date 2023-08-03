const fetch = require('node-fetch');
const xml2js = require('xml2js');

async function extract(url) {
  const response = await fetch(url);
  const html = await response.text();

  return xml2js.parseStringPromise(html, { mergeAttrs: true });
}

function getVeicle(data) {
  const [standard] = data.standard_lanes;
  const [readyLane] = data.standard_lanes;
  const [sentri] = data.NEXUS_SENTRI_lanes;

  return {
    standard: {
      time: +standard.delay_minutes[0],
      lanes: +standard.lanes_open[0],
    },
    sentri: {
      time: +sentri.delay_minutes[0],
      lanes: +sentri.lanes_open[0],
    },
    readyLane: {
      time: +readyLane.delay_minutes[0],
      lanes: +readyLane.lanes_open[0],
    },
  };
}

function getPedestrian(data) {
  const [standard] = data.standard_lanes;
  const [readyLane] = data.ready_lanes;

  return {
    standard: {
      time: +standard.delay_minutes[0],
      lanes: +standard.lanes_open[0],
    },
    readyLane: {
      time: +readyLane.delay_minutes[0],
      lanes: +readyLane.lanes_open[0],
    },
  };
}

function transform(portId, data) {
  const response = data.border_wait_time.port
    .filter((item) => item.port_number[0] === portId)
    .map((item) => {
      const vehicle = getVeicle(item.passenger_vehicle_lanes[0]);
      const pedestrian = getPedestrian(item.pedestrian_lanes[0]);
      const report = {
        vehicle,
        pedestrian,
      };

      return report;
    });

  return response[0];
}

exports.handler = async function () {
  const url = 'https://bwt.cbp.gov/xml/bwt.xml';
  const data = await extract(url);

  const cities = [
    {
      city: 'tijuana',
      ports: [{
        id: '250401',
        name: 'sanYsidro',
      }, {
        id: '250601',
        name: 'otay',
      }, {
        id: '250407',
        name: 'pedWest'
      }],
    },
    {
      city: 'mexicali',
      ports: [{
        id: '250301',
        name: 'east',
      }, {
        id: '250302',
        name: 'west',
      }],
    },
  ];

  const response = cities.map(item => {
    const { city, ports } = item;
    const report = {
      city,
      report: ports.reduce((accu, port) => {
        accu[port.name] = transform(port.id, data); //eslint-disable-line

        return accu;
      }, {}),
      created: new Date().toJSON()
    };

    return report
  });

  return {
    statusCode: 200,
    body: JSON.stringify(response)
  };
}
