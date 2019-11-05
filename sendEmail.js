const sgMail = require("@sendgrid/mail");
const sendGridAPIkey =
  "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";
sgMail.setApiKey(sendGridAPIkey);

sendUserDetailsEmail = user => {
  console.log(user);
  sgMail
    .send({
      to: user.Email,
      from: "sandeepdeepak006@gmail.com",
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
    .catch(err => console.log(err));
};

module.exports = { sendUserDetailsEmail };
