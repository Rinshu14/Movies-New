import react from "react"

class Filter extends react.Component
{ 

  filterSelected=(genre)=>{
    let preele=document.querySelector(".list-group").querySelector(".active")
    preele.classList.remove("active")
    let ele=document.querySelector("."+genre);
    ele.classList.add("active");
    this.props.changeFilter(genre);
}


  render(){
        return(
            <div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active All" aria-current="true" onClick={()=>{this.filterSelected("All")}}>
  All Genere
  </a>
  <a href="#" class="list-group-item list-group-item-action Thriller" onClick={()=>{this.filterSelected("Thriller")}}>Thriller</a>
  <a href="#" class="list-group-item list-group-item-action Action" onClick={()=>{this.filterSelected("Action")}}>Action</a>
  <a href="#" class="list-group-item list-group-item-action Comedy" onClick={()=>{this.filterSelected("Comedy")}}>Comedy</a>
 </div>

        )
    }
}
export default Filter