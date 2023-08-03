const { sendEmail } = require("../support/sendgrid-service");
const mintService = require("../support/mint-service");
const { handler: getReport } = require("./report");

exports.handler = async function () {
  const response = await getReport();

  if (response.statusCode !== 200) {
    await sendEmail("GC Report not 200");
    return response;
  }

  try {
    const report = JSON.parse(response.body);
    await mintService.uploadReport(report);
  } catch (error) {
    console.log(error)
    await sendEmail("GC Report Upload Error");
  }

  return {
    statusCode: 201,
    headers: {
      "Content-Type": "application/json",
    },
  };
};
