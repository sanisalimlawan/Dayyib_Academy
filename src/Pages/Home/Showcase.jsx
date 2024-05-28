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
                <p>Dayyib Academy are a conglomerate of the first three tiers of the educational institution – the Nursery, Primary and Secondary Schools, which the Founder found expedient to bring together for an all-round development of any child admitted into the school</p>
                <div className='qu'>Have a question? <NavLink to='about'>Contact us</NavLink></div>
                <hr />
                <p className='show-end'>We ensure that the children – boys and girls, through the help of their highly qualified proprietress, director, coordinators and teachers, achieve brilliant academic successes through hard work. </p>
            </div>
           
        </section>
    )
}