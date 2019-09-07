var nodemailer = require("nodemailer");

module.exports = function(recipient, plantName, nextWaterDate) {
  var transporter = nodemailer.createTransport({
    service: "yahoo",
    auth: {
      user: "indoorplants2019@yahoo.com",
      pass: "test123456"
    }
  });

  var mailOptions = {
    from: "indoorplants2019@yahoo.com",
    to: recipient,
    subject: "Water Plant Reminder",
    text: 'A friendly reminder to water your plant - "' + plantName + '"' + " on " + nextWaterDate
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
