import * as nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport(
  {
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  },
  {
    from: `"House of Consultancy" <${process.env.EMAIL_USER}>`,
  }
);

console.log(
  process.env.EMAIL_HOST,
  process.env.EMAIL_PORT,
  process.env.EMAIL_USER,
  process.env.EMAIL_PASSWORD
);
