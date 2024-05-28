import image from '../../../img/student-2.jpg'

export default function Why(){
    return(
        <section className='why-section'>
            <div>
                <h1 className='h-why'>Why Choose Us</h1>
            </div>
            <div className='why-card'>
            <Card image={image} title='Expert techers'/>
            <Card image={image} title='Good Classes'/>
            <Card image={image} title='ICT Dev'/>
            {/* <Card image={imag} title=''/> */}
            </div>
        </section>
    )
}

function Card({image, title}){
    return(
        <div className='card-card'>
        <img src={image} alt="" width='100%' height='100%'/>
        <h1 className='choose-head'>{title}</h1>
        </div>
    )
}