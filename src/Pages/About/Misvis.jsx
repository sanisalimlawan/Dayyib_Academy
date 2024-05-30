import { FaBook, FaPen } from "react-icons/fa";

export default function Misvis(){
    return(
        <div className="misvis">
            <div className="mission">
                <FaPen className="pen-icon"/>  
               <h1>Our Mission</h1> 
               <p>Our mission is to provide a nurturing and inclusive learning environment that fosters academic excellence, character development, and lifelong learning. We are committed to equipping students with the knowledge, skills, and values necessary to thrive in a rapidly changing world. Through a balanced curriculum and a supportive community, we strive to inspire curiosity, critical thinking, and a passion for learning in every student.</p>
            </div>
            <div className="vission">
                <FaBook className="book-icon"/>
                <h1>Our Vission</h1>
                <p>Our vision is to be a leading educational institution that empowers students to achieve their full potential and become responsible, compassionate global citizens. We envision a school where every student is encouraged to explore their interests, develop their talents, and contribute positively to society. By promoting innovation, resilience, and a commitment to excellence, we aim to create a dynamic and inclusive learning environment that prepares students for success in the 21st century.</p>
            </div>
        </div>
    )
}