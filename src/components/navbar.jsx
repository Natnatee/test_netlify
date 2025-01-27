import { Link } from "react-router-dom";
import log_test from '../assets/Logo/log_test.png'
import login from '../assets/Logo/login.png'
import USA from '../assets/Logo/USA.png'
import burger from '../assets/Logo/burger.png'
import { useState } from 'react';


function Navbar (){
    const [open,setOpen]=useState(false)
    const handleBurger=()=>{
        setOpen(!open)
    }
    return(
        <nav className="bg-blue-950 text-white  " >   
         <div className="flex justify-between mx-4">
         <Link to="/" ><img src={log_test} alt=""/></Link>
         
         <div className="flex gap-8">
           <Link to="/" className="flex flex-col justify-center mr-3">
             <img className="md:hidden" src={USA} alt=""/>
           </Link>
           <Link  className="flex flex-col justify-center mr-3">
             <img onClick={handleBurger} className="md:hidden" src={burger}  alt=""/>
           </Link>
           </div>
   
         {/* Desktop  */}
         <ul className="flex items-center gap-16 mr-6 max-md:hidden">
           <li><Link className="hover:underline" to="/">บริการเช่า</Link></li>
           <li><Link className="hover:underline" to="/sell">ต้องการซื้อ</Link></li>
           <li><Link className="hover:underline" to="/buy">ต้องการขาย</Link></li>
           <li><Link className="hover:underline" to="/"><img src={USA} alt=""/></Link></li>
           <li><Link className="hover:underline" to="/"><img src={login} alt=""/></Link></li>
         </ul>
         
       </div>
       
        {/* mobile  */}
        { open&&
       <ul  className=" flex justify-center flex-col items-center bg-gray-600 text-white text-4xl py-36 gap-16  md:hidden ">
           <li><Link className="hover:bg-blue-950 py-4 px-28" to="/">บริการเช่า</Link></li>
           <li><Link className="hover:bg-blue-950 py-4 px-28" to="/">ต้องการซื้อ</Link></li>
           <li><Link className="hover:bg-blue-950 py-4 px-28" to="/sell">ต้องการขาย</Link></li>
           <li><Link  className="bg-gray-800 py-4 px-36  w-full hover:bg-blue-950 " to="/"> login </Link></li>
       </ul>
       }
       </nav>
    
    )
}

export default Navbar;