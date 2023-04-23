import react from "react"
import Filter from "./Filter";
import Navbar from "./Navbar";
import "./FavouritePage.css"
import Table from "./Table";


class FavrouitePage extends react.Component {
  state = {
    favMovie: [],
    Currgenre: "",
    FavMovOfCurrGenre: [],

  }

  componentDidMount() {
    this.setState({ favMovie: [...this.props.favrouite], FavMovOfCurrGenre: [...this.props.favrouite], Currgenre: "All" })
  }

  componentWillUnmount() {
    this.props.stateAfterFavPageUnmount(this.state.favMovie);
  }

  removeFromFav = (id) => {

    let ans = this.state.favMovie.filter((el) => {
      return el._id != id
    });
    if (this.state.Currgenre != "All") {
      let an = ans.filter((el) => {
        return (el.genre.name) == this.state.Currgenre
      })
      this.setState({ favMovie: [...ans], FavMovOfCurrGenre: [...an] })
    }
    else {
      this.setState({ favMovie: [...ans], FavMovOfCurrGenre: [...ans] })
    }

  }

  changeFilter = (genre) => {
    if (genre == "All") {

      this.setState({ FavMovOfCurrGenre: [...this.state.favMovie], Currgenre: genre })
    }
    else {
      let ans = this.state.favMovie.filter((el) => {
        return (el.genre.name) == genre
      })
      this.setState({ FavMovOfCurrGenre: [...ans], Currgenre: genre })

    }
  }

  inputTextChange = (str) => {
    if (str == "") {
      this.changeFilter(this.state.Currgenre)
    }
    else {
      if (this.state.Currgenre == "All") {
        let ans = this.state.favMovie.filter((el) => {
          return el.title.toUpperCase().startsWith(str)
        })
        this.setState({ FavMovOfCurrGenre: [...ans] })
      }
      else {

        let temp = this.state.favMovie.filter((el) => {

          return (el.genre.name) == this.state.Currgenre
        })

        let ans = temp.filter((el) => {
          return el.title.toUpperCase().startsWith(str)
        })
        this.setState({ FavMovOfCurrGenre: [...ans] })
      }
    }
  }

  render() {
    return (
      <>
        <Filter changeFilter={this.changeFilter} />
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search" onChange={(event) => { this.inputTextChange(event.target.value.toUpperCase()) }} />
        <Table AllfavMovie={this.state.FavMovOfCurrGenre} removeFromFav={this.removeFromFav} />
      </>

    )
  }
}

export default FavrouitePage;
