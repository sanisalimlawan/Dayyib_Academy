import { FaLocationArrow } from "react-icons/fa";

export default function Form(){
    return(
        <section>
           <form>
            <p className="form-p-f">Fill out the form below to contact us</p>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="name" name="name"/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email"  />
            </div>
            <div className="form-group">
              <p>Message</p>
              <textarea name="message"></textarea>
              <button type="submit">
              <FaLocationArrow/> Submit
              </button>
            </div>
           </form>
        </section>
    )
}