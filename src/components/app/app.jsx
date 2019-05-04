import React from "react";
import Main from "../main/main";
import PropTypes from "prop-types";

const App = (props) => {
  App.propTypes = {
    films: PropTypes.array.required,
  };

  return <Main
    films = {props.films}
  />;
};

export default App;
