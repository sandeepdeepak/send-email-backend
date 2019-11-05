const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "yahoo",
  auth: {
    user: "sandymass002@yahoo.com",
    pass: "ykdusdbihaldyvxp"
  }
});
let sendVerificationEmail = users => {
  // send mail with defined transport object
  users.forEach(user => {
    transporter
      .sendMail({
        from: "sandymass002@yahoo.com", // sender address
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
      .then(res => console.log(res))
      .catch(err => console.log(err));
  });

  //   console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
};

module.exports = { sendVerificationEmail };
