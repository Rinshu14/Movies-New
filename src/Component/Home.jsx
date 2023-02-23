import react from "react"
// import './App.css';
//import Navbar from "./Navbar"
import Card from './Card';
//import movies  from "../data.json";
import Child_Card from "./Child_Card";
import Pagination from "./Pagination";


class Home extends react.Component{
 
  render(){
    
     //console.log(this.state.favrouite);
  return (
    <div className="home">
      
    
     <Card/>
     <h4 style={{"color":"white" ,"textAlign":"center","marginTop":"2rem"}}>Trending</h4>
     <Child_Card movies_data={this.props.movies_data} favrouite={this.props.favrouite} removeFromFav={this.props.removeFromFav} addInFav={this.props.addInFav} />
     <Pagination />
    
    
    </div>
  );
  }

  
  
 

//  removeFromFav=(id)=>{
//   let ans=  this.state.favrouite.filter((el)=>{
//    return el._id!=id}) ;

//   this.setState({favrouite:[...ans]});

// }

// addInFav=(movObj)=>
// {
//   this.setState({favrouite:[...this.state.favrouite,movObj]});
// }

// componentDidUpdate()
// {
//   console.log("in unmount");
//   this.props.addInFav(this.state.favrouite);
// }

// componentWillUnmount(){
//   console.log("in unmount");
//   this.props.addInFav(this.state.favrouite);
// }

}


export default Home;
