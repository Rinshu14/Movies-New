//import react from "react"
import {Link} from "react-router-dom"

let Navbar=(props)=>{
    return(    
        <nav class="navbar navbar-expand-lg bg-light" >
  <div class="container-fluid" >
       <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
                    <Link class="nav-link home" aria-current="page" to="/" onClick={()=>{
                      
                      props.onclckOfNav("home")}}>Home</Link>
         </li>
        <li class="nav-item">
                  <Link class="nav-link fav" aria-current="page" to="/FavouritePage" onClick={()=>{
                    
                    props.onclckOfNav("fav")}}
                    >Favourite</Link>
        </li>
              </ul>
    </div>
  </div>
</nav>
    )
}

// let onclckOfNav=(stat)=>{
 
//   if(stat=="fav")
//   {
//     document.querySelector(".navbar").querySelector(".home").classList.remove("now-act");

//     document.querySelector(".navbar").querySelector(".fav").classList.add("now-act");
//   }
//   else
//   {
//     document.querySelector(".navbar").querySelector(".fav").classList.remove("now-act");

//     document.querySelector(".navbar").querySelector(".home").classList.add("now-act");

//   }

//}

export default Navbar;