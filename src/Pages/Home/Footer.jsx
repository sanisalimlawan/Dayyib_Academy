import { FaFacebook, FaTwitter, FaTwitterSquare } from "react-icons/fa";
import { FaInstagram, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <footer>
            <div >
                <hr />
                <div className="footer-con">
                    <div>
                    &copy; Dayyib Academy 2024 All Rights Reserved. 
                    </div>
                    <div className="follow">
                     <span className="icon"> <Link to='/'><FaWhatsapp className="whatsapp"/></Link> </span>
                      <span className=" icon"> <Link to='/'><FaFacebook className="facebook" /></Link> </span> 
                      <span className="icon"> <Link to='/'><FaXTwitter className="twiter" /></Link> </span>
                      <span className="icon"> <Link to='/'><FaInstagram className="instagram"/></Link></span>
                    </div>
                </div>
            </div>
        </footer>
    )
}