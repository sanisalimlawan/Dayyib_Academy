
import { NavLink, Outlet} from "react-router-dom";
import logo from '../img/logonav.jpg'
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Layout(){
    const [isopen, setisopen] = useState(false)
    return(
        <>
        <header>
            <nav>
                <div className="lo-h1">
                <img src={logo} alt="logo" className="logo"/> <h1>  Dayyib <br />Academy</h1>
                </div>
                <div>
                    <ul className="ul-large">
                        <li>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='About'>About</NavLink>
                        </li>
                        <li>
                            <NavLink to='Contact'>Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to='gallery'>Academic</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="menu-icons">
                   <span onClick={(e) => setisopen(!isopen)}>
                   {!isopen ? <FaBars />:
                    <FaTimes />}
                  </span> 
                </div>
            </nav>
            <section className="res-sec">
            {isopen &&
            <div className="responsive">
                    <ul>
                        <li>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='About'>About</NavLink>
                        </li>
                        <li>
                            <NavLink to='Contact'>Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to='gallery'>Academic</NavLink>
                        </li>
                    </ul>
                </div>
           }
            </section>
        </header>
        <main>
            <Outlet />
        </main>
        </>
    )
}