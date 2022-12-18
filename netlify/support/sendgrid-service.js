const sgMail = require("@sendgrid/mail");
require("dotenv").config();

exports.sendEmail = async function (subject) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    text: "Email from GC",
    subject,
    to: 'info@mintitmedia.com',
    from: 'info@mintitmedia.com',
  };

  try {
    await sgMail.send(msg);
  } catch(error) {
    console.log(error)
  }
};
