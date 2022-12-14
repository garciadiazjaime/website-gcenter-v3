const fetch = require("node-fetch");
require("dotenv").config();

module.exports.uploadReport = async (payload) => {
  const url = `${process.env.API_URL}/report/static`

  await fetch(url, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {'Content-Type': 'application/json'}
  });
};
