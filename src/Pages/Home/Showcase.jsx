import { NavLink } from 'react-router-dom'
import showcasepoto from '../../../img/student-2.jpg'
import animatepoto from '../../../img/logo.jpg'
export default function Showcase(){
    return(
        <section className='showcase-container'>
             <div className='show-last'>
                <img src={showcasepoto} alt="student-image" className='show-case-img' />
                <img src={animatepoto} alt=""width='200px' className='animate-poto'/>
            </div>
            <div className='show-f-child'>
                <h1>Welcome to <br />Dayyib Academy</h1> 
                {/* <p>Dayyib Academy are a conglomerate of the first three tiers of the educational institution – the Nursery, Primary and Secondary Schools, which the Founder found expedient to bring together for an all-round development of any child admitted into the school
                </p> */}
                <p>
                At Dayyib Academy we are dedicated to providing a comprehensive education that blends academic excellence with strong moral and spiritual development. Our mission is to cultivate well-rounded individuals who are not only knowledgeable but also embody the principles of Islam in their daily lives. <br /> <br />
                Our dedicated and highly qualified teachers are not only educators but also mentors who guide and inspire students to be the best versions of themselves.
                </p>
                <div className='qu'>Have a question? <NavLink to='about'>Contact us</NavLink></div>
                <hr />
                {/* <p className='show-end'>We ensure that the children – boys and girls, through the help of their highly qualified proprietress, director, coordinators and teachers, achieve brilliant academic successes through hard work. </p> */}

                <p className="show-end">
                 we are committed to building a brighter future by shaping knowledgeable, ethical, and compassionate leaders. We invite you to join our community and embark on a journey of holistic education and personal growth.
                </p>
            </div>
           
        </section>
    )
}