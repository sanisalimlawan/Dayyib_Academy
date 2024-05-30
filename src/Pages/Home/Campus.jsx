
import lower from '../../../img/student-1.jpg'




export default function Campus(){
    return(
        <main className="campus">
            <div className="campus-h1">
            <h1>SCHOOL</h1>
            </div>
            <div className='main-card'> 
        
            <Card name='Nursery'img={lower} />
            
        
            <Card name='Primary'img={lower} />
            
        
            <Card name='Secondry'img={lower} />
            
        
            {/* <Card name='Islamiyya' img={lower} /> */}
            
            

            </div>
        </main>
    )
}

function Card(prop){
    return(
        <div className="campus-card">
            <img src={prop.img} alt="" className='campus-img' />
            <h3>{prop.name}</h3>
        </div>
    )
}