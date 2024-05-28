import { FaStar } from "react-icons/fa"

// import data from './Array.jsx'
export default function Testumonial(){
    return(
        <section className="testimonial">
            <div className="tetimonial-sec">
            <div className="h-section">
            <h1 className="h-testimonial">Testimonials</h1>
            </div>
            <div className="t-p-card">
                <Card 
                name='Muhammad'
                title='parent'
                message='Out Standing Enviroment for Learning, Instution Ready To Set The Face' />
                <Card 
                name='Zakari'
                title='parent'
                message='Out Standing Enviroment for Learning, Instution Ready To Set The Face'/>
                <Card
                name='Abdullmalik'
                title='parent'
                message='Out Standing Enviroment for Learning, Instution Ready To Set The Face' />
            </div>
            </div>
        </section>
    )
}

function Card(prop){
    
    return(
        <div className="data">
        <h1 >{prop.name}</h1>
        <p>{prop.title}</p>
        <p>{prop.message}</p>
        <div className='star'>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        </div>
        </div>
    )
}