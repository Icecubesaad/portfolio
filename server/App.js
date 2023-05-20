const express = require("express")
const nodemailer = require("nodemailer")
const app = express()
require('dotenv').config();

const router = express.Router()
const Email = "M.SaadUrRehmanWeb@gmail.com"
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });
router.post("/send",async(req,res)=>{

    const {email,name,desc} = req.body;
    const mailOptions = {
        from: Email,
        to: process.env.EMAIL2,
        subject: `Thanks for contacting us ${name}`,
        text: "From Email : " + email + "message : " + desc
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
        } else {
          console.log('Email sent:', info.response);
        }
      });
      res.json({ message: 'Sign-in successful' });
    
})
app.use(express.json());
app.use(router);
app.listen(3000,()=>{
    console.log("Server is running")
})

