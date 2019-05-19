import React from "react";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card";


const FilmsList = (props) => {
  let filmsList = [];

  for (let film of props.films) {
    if (Object.keys(film).length !== 0) {
      let index = 0;

      filmsList.push(<FilmCard
        film = {film}
        index = {index++}
      />);
    }
  }

  return filmsList;
};

FilmsList.propTypes = {
  films: PropTypes.array.isRequired,
};

export default FilmsList;
