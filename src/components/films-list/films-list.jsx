import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card";

class FilmsList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: {},
      activeCardKey: -1,
    };
  }

  render() {
    let filmsList = this.props.films.map((film, key) =>
      <FilmCard
        film = {film}
        index = {key}
        onCardOver = {(data, activeCardIndex) => {
          this.setState({
            activeCard: data,
            activeCardKey: activeCardIndex,
          });
        }}
        key = {key}
      />
    );

    return <div className="catalog__movies-list">
      {filmsList}
    </div>;
  }
}

FilmsList.propTypes = {
  films: PropTypes.array.isRequired,
  onCardOver: PropTypes.func,
};

export default FilmsList;
