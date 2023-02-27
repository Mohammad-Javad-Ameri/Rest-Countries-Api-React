import { FaMoon } from "react-icons/fa";
import { useState } from "react";
const Header = () => {
     const [dark,setDark]=useState(false);
       
     const changeColor = ()=>{
          if(dark===false){
          document.body.classList.remove("light");
          document.body.classList.toggle("dark");
          setDark(true);
          }
          else{
               document.body.classList.remove("dark");
               document.body.classList.toggle("light");
               setDark(false);
          }
     }
    return ( 
         <nav className="navbar navbar-expand-md   px-5 pt-3  navbarr">
        <div className="container">
        <h2 className="setnav"><b>Where In The World?</b></h2>
        <button className="text-center setnavv" onClick={changeColor}>{dark ?  <FaMoon/>:<FaMoon/>}{dark ? <span> Light Mode</span>: <span> Dark Mode</span>}</button>
        </div>
        </nav>
      
     );
}
 
export default Header;