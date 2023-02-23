import react from "react"

class Pagination extends react.Component
{  
    render(){
        return(
            <nav aria-label="Page navigation example" style={{"margin-top":"20px" ,"marginLeft":"530px"}}>
  
  

  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
        )

    }
}
export default Pagination;