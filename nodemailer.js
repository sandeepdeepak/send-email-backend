const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  pool: true,
  auth: {
    user: "sandeepdeepak006@gmail.com",
    pass: "sandeepak"
  }
});
let sendVerificationEmail = user => {
  // send mail with defined transport object
  transporter
    .sendMail({
      from: "sandeepdeepak006@gmail.com", // sender address
      to: user.Email, // list of receivers
      subject: "User Data Verification",
      text: `Hey ${user.Firstname},

    Kindly confirm if the following details are correct.
    
    ${user.Firstname} ${user.Lastname}
    ${user.Email}
    ${user.Phone}
    ${user.Address}
    ${user.Gender}
    
    Regards,
    
    Sandy`
    })
    .then(() => transporter.close());

  //   console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
};

module.exports = { sendVerificationEmail };
