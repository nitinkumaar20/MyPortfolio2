import {React,useState }from "react";
import { Inputitem } from "./Inputitem";
import {Message} from '../api/index'
import { FaSquareInstagram } from "react-icons/fa6";
import { IoMdDoneAll } from "react-icons/io";

const Contact = () => {
const [message, setMessage] = useState({Fname:"",Lname:"",phone:"",message:"",email:""});
const [success, setSuccess] = useState(true)

const onchange =(e)=>{


  setMessage({...message,[e.target.name]:e.target.value})
}
  const MesSubmit =(e)=>{
    e.preventDefault()
Message(message).then(({data})=>{
  console.log(data)
setSuccess(false);
}).catch(({response})=>{console.log(response.data.error)});
    console.log(message);
  }
  return (
    <>
  
    <section style={{ padding: "2rem 19rem" }} id="contact">
{
  success ?<div>
    <div className="div-center my-4">
      <h1>CONTACT</h1>
      {/* <h2>Here's My Past Projects</h2> */}
    </div>
      
        <form action="" className="row " onSubmit={MesSubmit}>
          
        <Inputitem input={"First Name"} value={message.Fname} type={"text"} id={"Fname"} name={"Fname"} onChangeData={onchange}/>
        <Inputitem input={"Last Name"} value={message.Lname} type={"text"} id={"Lname"} name={"Lname"} onChangeData={onchange}/>
        <Inputitem input={"Email"} value={message.email} type={"email"} id={"email"} name={"email"} onChangeData={onchange} />
        <Inputitem input={"Phone No"} value={message.phone} type={"number"} id={"Pno"} name={"phone"} onChangeData={onchange}/>


        <label htmlFor="message" style={{ fontSize: "1.5rem",marginTop:'1rem' }}>Message</label>
        <textarea  id="message" cols="30" rows="5" style={{fontSize:'1.5rem',outline:"none",borderRadius:'2rem',marginTop:'.5rem'}} placeholder="Enter message" name ="message" value={message.message} onChange={onchange}></textarea>
        <div className="div-center mt-4 " >

      <button className="btn-all"   type="submit" style={{fontSize:'1.7rem'}}>Submit</button>
        </div>
        </form>
        </div>:
         <div  style={{ padding: "2rem 19rem", display:'flex',justifyContent:'center',alignItems:'center', }}>
          <h1>Message send Succesful</h1>
<IoMdDoneAll style={{fontSize:'3rem',margin:'0 1rem',color:'#1aff34',padding:'0'}} />
        </div>
}
    </section>
    </>
  );
};

export default Contact;
