import React from "react";
import PropTypes from "prop-types";

const FilmCard = (props) => {
  const film = props.film;
  const index = props.index;

  return <article className="small-movie-card catalog__movies-card" key={index} data-index={index} onMouseOver={() => props.onCardOver(index)}>
    <button className="small-movie-card__play-btn" type="button">Play</button>
    <div className="small-movie-card__image">
      <img src={film.img} alt={film.title} width="280" height="175" />
    </div>
    <h3 className="small-movie-card__title">
      <a className="small-movie-card__link" href={`movie-page.html/` + film.src}>{film.title}</a>
    </h3>
  </article>;
};

FilmCard.propTypes = {
  film: PropTypes.object.isRequired,
  // film: PropTypes.object({title: PropTypes.string.isRequired, img: PropTypes.string.isRequired, src: PropTypes.string.isRequired}).isRequired,
  index: PropTypes.number.isRequired,
  onCardOver: PropTypes.func,
};

export default FilmCard;
