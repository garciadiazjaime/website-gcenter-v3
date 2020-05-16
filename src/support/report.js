function getEmptyReport() {
  return [{
    "port": "sanYsidro",
    "data": {
      "vehicle": {
        "standard": {
          "time": "-1",
          "lanes": ""
        },
        "sentri": {
          "time": "-1",
          "lanes": ""
        },
        "readyLane": {
          "time": "-1",
          "lanes": ""
        }
      },
      "pedestrian": {
        "standard": {
          "time": "-1",
          "lanes": ""
        },
        "readyLane": {
          "time": "-1",
          "lanes": ""
        }
      }
    }
  }, {
    "port": "otay",
    "data": {
      "vehicle": {
        "standard": {
          "time": "-1",
          "lanes": ""
        },
        "sentri": {
          "time": "-1",
          "lanes": ""
        },
        "readyLane": {
          "time": "-1",
          "lanes": ""
        }
      }
    }
  }, {
    "port": "pedwest"
  }]
}

export {
  getEmptyReport
}
