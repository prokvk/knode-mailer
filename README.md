knode-mailer
============

is a simple node module wrapper on `nodemailer`.

# Install:

```
npm install --save knode-mailer
```

# Usage:

## Config sample

```
mailer:
	service: 'SES-EU-WEST-1'
	from: 'sender <sender@bender.com>'
	auth:
		user: process.env.MAILER_USER
		pass: process.env.MAILER_PASS
```

## JS sample

```javascript
var mailer = require('knode-mailer')(config); //config should hold all the settings as shown above

var htmlContent = false;

mailer.send('recipient@domain.com', 'subject', 'message body', htmlContent, function(err, info) {
  if (err) {
    console.log("ERROR: " + err);
  }
  return console.log(info);
});
```