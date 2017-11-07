import React, { Component } from 'react';
import logo from './logo.svg';
import MovieDetails from './movieDetails.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      movie: null
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.retrieveMovie()
  }

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value });
  }

  retrieveMovie = () => {
    // event.preventDefault();
    // let key = 'e9743662f5a39568d8e25225f2c97e09'
    let key = 'bde024f3eb43f597aafe01ed9c9098c6'

    let movie_search_url = 'https://api.themoviedb.org/3/search/movie?api_key=' + key + '&language=en-US'
    movie_search_url += "&query=" + this.state.title;
    fetch(movie_search_url).then(this.parseResponse).then(this.showMovie);
  }

  parseResponse = (response) => { return response.json(); }

  showMovie = (data) => {
    // let key = 'e9743662f5a39568d8e25225f2c97e09'
    let key = 'bde024f3eb43f597aafe01ed9c9098c6'

    if (data.results.length > 0) {
      let movie = data.results[0];
      this.setState({ movie: movie })

      let url = "https://api.themoviedb.org/3/movie/" + movie.id + "/credits?api_key=" + key
      fetch(url).then(this.parseResponse).then(this.receiveDetails);
    } else {
      this.setState({ movie: null })
    }
  }

  receiveDetails = (data) => {
    let movie = this.state.movie;
    movie.director = data.crew.find(entry => (entry.job === 'Director'));
    movie.actors = data.cast.slice(0, 3)
    this.setState({ movie: movie });
  }

  handleAddFavorite = (event) => {
    event.preventDefault();
    this.setState( { favorites: this.state.favorites.concat(this.posterUrl()) } );
  }

  render() {

    return (
      <div>
        <div className="row">
          <div className="col-sm-6">
            <form onSubmit={this.handleSubmit}>
              <input placeholder="Search by title..."
                className="form-control"
                onChange={this.handleTitleChange}
                value={this.state.title}
                type="text"
                name="title"
                autoFocus={true}
              />
              <button className="btn btn-primary my-3 mr-3">Search</button>
            </form>
          </div>
        </div>

        <MovieDetails movie={this.state.movie}/>

      </div>
    )
  }
}

export default App;
