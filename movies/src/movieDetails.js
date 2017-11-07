import React from 'react'

class MovieDetails extends React.Component {

  constructor(props) {
    super(props)
    this.state = { }
  }

  posterUrl = () => {
    if (this.props.movie) {
      return "http://image.tmdb.org/t/p/w300/" + this.props.movie.poster_path;
    }
    return "http://via.placeholder.com/300x450";
  }

  render() {
    let cast = [<li key="Actor1">Actor #1 as Character #1</li>,<li key="Actor2">Actor #2 as Character #2</li>,<li key="Actor3">Actor #3 as Character #3</li>]
    if (this.props.movie && this.props.movie.actors) {
      cast = this.props.movie.actors.map((actor) => <li key={actor.name}>{actor.name} as {actor.character}</li>);
    }

    let titleAndYear = "Movie Title (Year)"
    if (this.props.movie) {
      titleAndYear = this.props.movie.title
      if (this.props.movie.release_date) {
        titleAndYear += " (" + this.props.movie.release_date.substr(0,4) + ")"
      }
    }

    let directedBy = "Famous Director"
    if (this.props.movie && this.props.movie.director && this.props.movie.director.name) {
      directedBy = this.props.movie.director.name
    }

    return (
        <div className="row">
          <div className="col-sm-4">
            <img id="movie" src={this.posterUrl()} />
          </div>

          <div className="col-sm-6">
            <div className="card">
              <div className="card-header bg-primary text-white">
                <h4 className="mb-0">{titleAndYear}</h4>
              </div>
              <div className="card-body">
                <p className="card-text">
                  <em>
                    {(this.props.movie && this.props.movie.overview) || "Some kind of brief, witty overview will be displayed here."}
                  </em>
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><strong>Directed By:</strong> {directedBy}</li>
                <li className="list-group-item"><strong>Starring:</strong>
                  <ul>
                    {cast}
                  </ul>
                </li>
              </ul>
            </div>

          </div>
        </div>
    )
  }
}

export default MovieDetails
