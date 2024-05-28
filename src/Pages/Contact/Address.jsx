import {  FaMobile, FaSchool } from "react-icons/fa";
import {  FaCalendarDays, FaPhone } from "react-icons/fa6";

export default function Adress(){
    return(
        <section className="contact-others">
         <div className="others-c">
            <div>
                <span className="add-icons"> 
                <FaSchool className="icons"/>
                </span> 
             <h1>Address</h1>
             <p>5th Avenue, Bajallabe Northwest university, Kano Nigeria.</p>
            </div>
            <div>
             <span className="add-icons">
                <FaPhone className="icons"/>
             </span>
             <h1>Phone</h1>
             <p> <span><FaMobile /></span> Mobile: 08060844131</p>
             <p> <span></span>  Mail: abubakartanko08@gmail.com</p>
            </div>
            <div>
                <span className="add-icons">
                <FaCalendarDays className="icons"/>
                </span>
             <h1>Hour of Operation</h1>
             <p>Monday-Saturday 07:30 - 06-00</p>
            </div>
         </div>
        </section>
    )
}