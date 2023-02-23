import react from "react"
import { BrowserRouter as Router, Routes, Route, json } from "react-router-dom";
import FavouritePage from "./Component/FavouritePage"
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import movies  from "./data.json";

class App extends   react.Component{
  state ={ movies_data:movies,
    favrouite:[]}

componentDidMount()
{
 
document.querySelector(".navbar").querySelector(".home").classList.add("now-act");

let dd=JSON.parse(window.localStorage.getItem("favrouite"));
if(dd!=null)
{ 
this.setState({favrouite:[...dd]})
}


 
}

componentDidUpdate()
{ 
  window.localStorage.setItem("favrouite",JSON.stringify(this.state.favrouite))

}
 
  removeFromFav=(id)=>{

   
    let ans=  this.state.favrouite.filter((el)=>{
     return el._id!=id}) ;
  
    this.setState({favrouite:[...ans]});
  
  }
  
  addInFav=(movObj)=>
  {
    this.setState({favrouite:[...this.state.favrouite,movObj]});
  }

  stateAfterFavPageUnmount=(newFavMov)=>
  {  
    
    this.setState({favrouite:[...newFavMov]})
  }

  onclckOfNav=(stat)=>{
   
    if(stat=="fav")
    {
      document.querySelector(".navbar").querySelector(".home").classList.remove("now-act");
  
      document.querySelector(".navbar").querySelector(".fav").classList.add("now-act");
    }
    else
    {
      document.querySelector(".navbar").querySelector(".fav").classList.remove("now-act");
  
      document.querySelector(".navbar").querySelector(".home").classList.add("now-act");
  
    }
  }

  render(){
    
     return (
      <>
      
       <Router>
       <Navbar onclckOfNav={this.onclckOfNav}/>
      <Routes>
        
       <Route path="/" element={<Home  movies_data={this.state.movies_data} favrouite={this.state.favrouite} addInFav={this.addInFav} removeFromFav={this.removeFromFav}/>}></Route>
       <Route path="/FavouritePage" element={<FavouritePage favrouite={this.state.favrouite} stateAfterFavPageUnmount={this.stateAfterFavPageUnmount}/>}></Route>
      </Routes>
    
    </Router>
    </>
  );
  
  }

}


export default App;
