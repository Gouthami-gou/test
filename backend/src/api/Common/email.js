import nodemailer from 'nodemailer';

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",  
  secure: true,
  port: 465,
  auth: {
    user: '@gmail.com',
    pass: ''
  },
  tls: {
    rejectUnauthorized: false
  }
});

export const sendEmail = (tomail, subject, body) => {  
  const message = {
    from: 'Library Management System<info@gmail.com>',
    to: tomail,
    subject: subject,
    html: body
  };

  transporter.sendMail(message, (error, info) => {
    if (error) {
      return console.log('in nodemailer transporter',error);
    }
    console.log('Message sent: %s', info.messageId);
  });
};
