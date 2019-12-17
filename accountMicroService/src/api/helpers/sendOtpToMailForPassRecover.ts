import nodemailer from 'nodemailer';

export const sendOtpToMailForPassRecover = async (mailTo: string, otp: any) => {
    const username = 'romashka123@zoho.com';
    const password = 'adjara123';
    const service = 'zoho';

    const from = 'romashka123@zoho.com';
    const to = mailTo;
    const subject = 'Password Recovery :)';
    const text = otp;

    const transporter = nodemailer.createTransport({
        service: service,
        auth: {
            user: username,
            pass: password
        }
    });
      
    const mailOptions = {
        from: from,
        to: to,
        subject: subject,
        text: text
    };
      
    function sendMail() {
      return new Promise( (resolve, reject) => {
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
            resolve();
          } else {
            reject();
          }
        });
      });
    }

    try {
      const response = await sendMail();
      return true;
    } catch (error) {
      return false;
    }
}