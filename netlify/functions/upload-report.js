const backblazebService = require("../support/backblaze-service");
const { sendEmail } = require("../support/sendgrid-service");
const { handler: getReport } = require("./report");

exports.handler = async function (event, context) {
  const response = await getReport(event, context);
  if (response.statusCode !== 200) {
    await sendEmail("GC Report not 200");
    return response;
  }

  try {
    const report = JSON.parse(response.body);
    await backblazebService.uploadReport(report);
  } catch(error) {
    await sendEmail("GC Report Upload Error");
  }

  await sendEmail("GC Report generated");

  return {
    statusCode: 201,
    headers: {
      "Content-Type": "application/json",
    },
  };
};
