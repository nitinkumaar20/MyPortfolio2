import { messageModel}  from "../Models/Message.js";
import nodemailer from 'nodemailer'
import { isRequired } from "../middleware/fieldMiddleware.js";
const ownerEmail = 'nk999549@gmail.com'
import 'dotenv/config'

export const Message = async (req, res) => {
    try {
      const { email,phone, Fname,Lname,message } = req.body
      let user = await messageModel.findOne({ email: email });
      if (user) {
        return res.status(400).json({ error: "already sent message",result:false });
      }
  
   
  
      user = await messageModel.create({
         email,
        phone,
        Fname,
    Lname,
        message,
      });
  
  
  
      // res.json({ result:true,message:"message sent successful"});
      
  
      /////////////////////////// sending mail to the user ////////////////////////////////////////////////////////////
  
      if (user) {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.USER,
            pass: process.env.PASS,
          },
        });
  
        async function main() {
          const info = await transporter.sendMail({
            from: "<nk999549@gmail.com>",
            to: ownerEmail,
            subject: "Client Message",
  
            html: `<div style={{border: 2px solid:black}}>
                        
              
                        <h2>You Recieve Message from ${Fname}</h2>
                        
                        <h2>
                        <br>
                        Client Details
                        <br>
                        Client Name : ${Fname + Lname}
                        <br>
                        Client Email: ${email}
                        <br>
                        Client Phone no.: ${phone}
                        </h2>
                        <h2>${message}</h2>
                        
                      </div>`,
          });
  
          console.log("Message sent");
        }
  
        main().catch(console.error);
        // main().resolve(()=>{res.json({ result:true,message:"message sent successful"});})
      }
       
      res.json({ result:true,message:"message sent successful"});
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server error" });
    }
  };
  