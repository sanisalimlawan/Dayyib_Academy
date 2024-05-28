import Footer from "../Home/Footer";
import Adress from "./Address";
import Form from "./Form";
import Map from "./Map";



export default function Contact(){
    return(
        <section>
        <div className="c-content">
          <h1>Contact <span className="us">Us</span></h1>
          <p>you can reach us via email, phone, or visit us</p>
        <div className="f-and-m-sec">
          <Form />
          <Map />
        </div>
        </div>
        <Adress />
        <Footer />
        </section>
    )
}