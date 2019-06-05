var accountSid = 'AC1a104ed16d41c7f25abda544b8415ee8'; // Your Account SID from www.twilio.com/console
var authToken = 'b2362715cca422292c97bc2ca0343cda';   // Your Auth Token from www.twilio.com/console

var client = require('twilio')(
    accountSid,
    authToken
  );

client.messages.create({
    from: '+14704418378',
    to: '+17708452772',
    body: "You just sent an SMS from Node.js using Twilio!"
  }).then((message) => console.log(message.sid));