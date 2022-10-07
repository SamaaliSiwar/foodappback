import nodemailer from "nodemailer";
const sendEmail = async (email, link) => {
  try {
  const transporter = nodemailer.createTransport({

    service: "Gmail",
    auth: {
        user: "diamellepfe@gmail.com",
        pass: "oznumkplfnyqwjte",
      },
    });

    await transporter.sendMail({
      from: process.env.USER,
      to: email,
      subject: "Verification de compte",
      html: `<div>
      'Vous recevez ceci parce que vous (ou quelqu'un d'autre) avez demandé la réinitialisation du mot de passe de votre compte.\n\n
      Veuillez cliquer sur le lien suivant ou collez-le dans votre navigateur pour terminer le processus dans l'heure suivant sa réception :\n\n 
      <a href=${link}>ici</a>
    Si vous ne l'avez pas demandé, veuillez ignorer cet e-mail et votre mot de passe restera inchangé.\n'
      </div>`,
      
    });
    console.log("email sent sucessfully");
  } catch (error) {
    console.log("email not sent");
    console.log(error);
  }
};
export default sendEmail;