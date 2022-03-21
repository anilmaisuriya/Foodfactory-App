import React, { useState } from "react";
import Menucard from "./Menucard";
import './Restro.css'
import Menu from "./Menuapi";

function Restro(){

   const  [menuData,setmenuData]=useState(Menu)
   

   const filteritem=(category) => {
      const newitem = Menu.filter((curElem) =>{
         return curElem.category === category;
                
        
      });
      
      setmenuData(newitem);
      
   }
 
 
   

return(
   <>
   <nav className="navbar">
      <div className="btn-grp">
         <button className="btn-group__item" onClick={()=> filteritem("breakfast")}>
            Breakfast</button>
         <button className="btn-group__item" onClick={()=>filteritem("lunch")}>
            Lunch</button>
         <button className="btn-group__item" onClick={()=>filteritem("evening")}>
            Evening</button>
         <button className="btn-group__item" onClick={()=>filteritem("dinner")}>
            Dinner</button>
         <button className="btn-group__item" onClick={()=> setmenuData(Menu)}>All</button>
      </div>

   </nav>
<Menucard menuData={menuData}/>
</>
);

}

export default Restro;