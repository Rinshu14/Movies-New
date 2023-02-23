import react from "react"
import "./Child_Card.css";

class Child_Card  extends react.Component{
    render(){
        return (

this.props.movies_data.map((el)=>{
return(
<div className={`card_child ${el._id}`} onMouseOver={()=>{

let butn=document.querySelector(`.bt${el._id}`);
butn.style.display="inline-block";
butn.innerText=check(el._id ,this.props.favrouite)?"Remove  from Fav":"Add to Fav";
 }}   
 onMouseLeave={()=>{
  let va=document.querySelector(`.bt${el._id}`).style.display="none"}}>

  <img src={el.poster_path} className="card-img-top-child" alt="..." style={{"border-radius":"10%"}}/>

    <h5 class="card-title-child">{el.title}</h5>
    <button class={`btn btn-primary bt${el._id}`} type="submit" 
    onClick={()=>{
        
       // check(el._id ,this.props.favrouite)?this.props.removeFromFav(el._id):this.props.favrouite.push(el);
         
       check(el._id ,this.props.favrouite)?this.props.removeFromFav(el._id):this.props.addInFav(el);
        
   
    }}></button>
 
</div>
)}))}

 

}
let check=( id,favArr)=>
 {
    let arr=favArr.filter((el)=>{return el._id==id})

return (arr.length==0)?false:true;
}







export default Child_Card;