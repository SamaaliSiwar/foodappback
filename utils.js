import nodemailer from "nodemailer";
import jwt  from "jsonwebtoken";

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
export const generateToken = (user) => {
    return jwt.sign(
      {
        _id: user._id,
        name: user.name,
        email: user.email,
          verified: user.verified,
      },
      process.env.JWT_SECRET || '20102020',
      {
        expiresIn: '30d',
      }
    );
  };
  export const isAuth = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (authorization) {
      const token = authorization.slice(7, authorization.length); // Bearer XXXXXX
      jwt.verify(
        token,
        process.env.JWT_SECRET || '20102020',
        (err, decode) => {
          if (err) {
            res.status(401).send({ message: 'Invalid Token' });
          } else {
            req.user = decode;
            next();
          }
        }
      );
    } else {
      res.status(401).send({ message: 'No Token' });
    }

  };
export const verified = (req, res, next) => {
    if (req.user && req.user.verified) {
      next();
    } else {
      res.status(401).send({ message: 'Invalid user Token' });
    }
  };