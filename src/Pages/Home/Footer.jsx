import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

export default function Footer(){
    return(
        <footer>
            <div >
                <hr />
                <div className="footer-con">
                    <div>
                    &copy; Dayyib Academy 2024 All Rights Reserved. 
                    </div>
                    <div>
                        Follow us <span className="whatsapp icon"><FaWhatsapp /></span> <span className="facebook icon"><FaFacebook /></span> 
                    </div>
                </div>
            </div>
        </footer>
    )
}