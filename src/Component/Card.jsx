import react from "react"
import  "./Card.css"


class Card extends react.Component {
    render(){
        return(
            <div className="card"  >
  <img src="https://m.media-amazon.com/images/M/MV5BZmRmNjhmOGItNWMzNi00NTMyLTgzZTktY2UxMzQ4YjhhN2YxXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_FMjpg_UX1280_.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Avengers Endgame</h5>
    <p className="card-text">In 2018, twenty-three days after Thanos erased half of all life in the universe, Carol Danvers rescues Tony Stark and Nebula from deep space and they reunite with the remaining Avengers—Bruce Banner, Steve Rogers, Thor, Natasha Romanoff, and James Rhodes—and Rocket on Earth</p>
   
  </div>
</div>
        )
    }
}

export default Card;