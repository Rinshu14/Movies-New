import react from "react"

class Table extends react.Component
{   




render(){

        return(
            <table class="table">
                <col style={{"width":"11%"}}/>
                <col style={{"width":"40%"}}/>
                <col style={{"width":"15%"}}/>
                <col style={{"width":"15%"}}/>
                <col style={{"width":"15%"}}/>
                <col style={{"width":"15%"}}/>
  <thead>
    <tr>
      <th scope="col">Sr No.</th>
      <th scope="col">Name</th>
      <th scope="col">Ratings</th>
      <th scope="col">Popularity</th>
      <th scope="col">Genre</th>
      <th scope="col">Remove</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">

   {
  this.props.AllfavMovie.map((el,index)=>{
    return(<tr>
      <th scope="row">{index+1}</th>
      <td><img className="move_img" src={el.poster_path}></img>{el.title}</td>
      <td>{el.numberInStock}</td>
      <td>{el.dailyRentalRate}</td>
      <td>{el.genre.name}</td>
      <td><button className="butn" onClick={()=>{
       
        this.props.removeFromFav(el._id)}}>Remove</button></td>
    </tr>)})}
</tbody>
</table>
        )
    }
}

export default Table;