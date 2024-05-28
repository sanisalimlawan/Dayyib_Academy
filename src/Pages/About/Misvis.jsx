import { FaBook, FaPen } from "react-icons/fa";

export default function Misvis(){
    return(
        <div className="misvis">
            <div className="mission">
                <FaPen className="pen-icon"/>  
               <h1>Our Mission</h1> 
               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur ratione repellendus corporis quae.</p>
            </div>
            <div className="vission">
                <FaBook className="book-icon"/>
                <h1>Our Vission</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque hic ab dolores accusantium!</p>
            </div>
        </div>
    )
}