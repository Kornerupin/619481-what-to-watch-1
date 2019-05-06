import React from "react";
import Main from "../main/main";
import PropTypes from "prop-types";

const App = (props) => {
  const clickHandler = () => {};

  return <Main
    films = {props.films}
    onclick={clickHandler}
  />;
};

App.propTypes = {
  films: PropTypes.array.isRequired,
};

export default App;
