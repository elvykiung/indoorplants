var nodemailer = require('nodemailer');

module.exports = function(recipient, plant, nextWaterDate){

    var transporter = nodemailer.createTransport({
        service: 'yahoo',
        auth: {
          user: 'coding_test@yahoo.com',
          pass: 'test123456'
        }
      });
      
      var mailOptions = {
        from: 'coding_test@yahoo.com',
        to: 'xiejing418@hotmail.com',
        subject: 'Reminder for watering your plant',
        text: 'Please remember to water your plant:'

        // text: 'Please remember to water your plant:'+ plant + " on " + nextWaterDate
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
            
}