mailer = require('nodemailer')
_ = require('lodash')

module.exports = (config) ->
	mailOpts =
		from: config.from

	p_transport = null

	getTransport = () ->
		return p_transport if p_transport

		p_transport = mailer.createTransport config
		p_transport

	send: (toEmail, subject, cont, html, done) ->
		opts = {to: toEmail, subject: subject}

		if html then opts.html = cont else opts.text = cont

		opts = _.extend mailOpts, opts

		getTransport().sendMail opts, (err, info) ->
			return done err if err
			done null, info