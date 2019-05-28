import React from "react";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card";

const FilmsList = (props) => {
  let filmsList = [];
  let index = 0;

  for (let film of props.films) {
    if (Object.keys(film).length !== 0) {
      filmsList.push(<FilmCard
        film = {film}
        index = {index++}
        onCardOver = {props.onCardOver}
      />);
    }
  }

  return filmsList;
};

FilmsList.propTypes = {
  films: PropTypes.array.isRequired,
  onCardOver: PropTypes.func,
};

export default FilmsList;
