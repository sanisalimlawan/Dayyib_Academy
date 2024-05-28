import Who from "./Who";
import image from '../../../img/photo-2.jpg'
import Misvis from "./Misvis";
import Footer from '../Home/Footer'
import { FaMousePointer } from "react-icons/fa";
export default function About(){
    return(
        <section>
            <div className="about-content">
              <h1>About us</h1>
              <div className="about-hero">
              <Who />
              <img src={image} alt="school photo" width='350px' />
              </div>
            </div>
            <div className="vi-and-mi"> 
                <Misvis />
                {/* <FaMousePointer /> */}
            </div>
            <Footer />
        </section>
    )
}