(function() {
  var _, mailer;

  mailer = require('nodemailer');

  _ = require('lodash');

  module.exports = function(config) {
    var getTransport, mailOpts, p_transport;
    mailOpts = {
      from: config.from
    };
    p_transport = null;
    getTransport = function() {
      if (p_transport) {
        return p_transport;
      }
      p_transport = mailer.createTransport(config);
      return p_transport;
    };
    return {
      send: function(toEmail, subject, cont, html, attachments, done) {
        var opts;
        opts = {
          to: toEmail,
          subject: subject,
          attachments: attachments
        };
        if (html) {
          opts.html = cont;
        } else {
          opts.text = cont;
        }
        opts = _.extend(mailOpts, opts);
        return getTransport().sendMail(opts, function(err, info) {
          if (err) {
            return done(err);
          }
          return done(null, info);
        });
      }
    };
  };

}).call(this);
