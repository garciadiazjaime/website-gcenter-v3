export function getEmptyReport() {
  return [
    {
      port: "sanYsidro",
      data: {
        vehicle: {
          standard: {
            time: "...",
            lanes: "...",
          },
          sentri: {
            time: "...",
            lanes: "...",
          },
          readyLane: {
            time: "...",
            lanes: "...",
          },
        },
        pedestrian: {
          standard: {
            time: "...",
            lanes: "...",
          },
          readyLane: {
            time: "...",
            lanes: "...",
          },
        },
      },
    },
    {
      port: "otay",
      data: {
        vehicle: {
          standard: {
            time: "...",
            lanes: "...",
          },
          sentri: {
            time: "...",
            lanes: "...",
          },
          readyLane: {
            time: "...",
            lanes: "...",
          },
        },
      },
    },
  ];
}

function timeConvert(num) {
  const hours = Math.floor(num / 60);
  let minutes = num % 60;
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${hours}:${minutes}`;
}

export function printType(value) {
  if (value === "sentri") {
    return "Sentri";
  }

  if (value === "readyLane") {
    return "Ready Lane";
  }

  return "Normal";
}

export function printTime(value) {
  if (value === "...") {
    return value;
  }

  if (!value || value === "0") {
    return "Sin espera";
  }

  if (value < 60) {
    return `${value} Minuto${value > 1 ? "s" : ""}`;
  }

  return `${timeConvert(value)} Hora${value > 60 ? "s" : ""}`;
}

export function printLanes(value) {
  if (value === "...") {
    return "Línea";
  }

  const s = value > 1 ? "s" : "";
  return `${value} Línea${s}`;
}

export async function getReportFor(city) {
  const response = await fetch("https://api.garitacenter.com/gc_report.json");
  const data = await response.json();

  localStorage.setItem("@gc_report", JSON.stringify(data));

  const { report } = data.find((item) => item.city === city) || {};

  if (city === "tijuana") {
    return [
      { port: "sanYsidro", data: report.sanYsidro },
      { port: "otay", data: report.otay },
    ];
  }

  if (city === "mexicali") {
    return [
      { port: "east", data: report.east },
      { port: "west", data: report.west },
    ];
  }

  return report;
}

function getMinutesSinceLastReport(created) {
  const now = new Date();
  const lastCreated = new Date(created);

  const diffTime = Math.abs(now - lastCreated);
  const minutes = Math.ceil(diffTime / (1000 * 60));

  return minutes;
}

export async function notifyReport() {
  const response = localStorage.getItem('@gc_report')
  const data = JSON.parse(response)

  const { created } = data.find((item) => item.city === "tijuana") || {};

  const minutes = getMinutesSinceLastReport(created);

  if (minutes < 10) {
    return;
  }

  await fetch(".netlify/functions/upload-report");
}
