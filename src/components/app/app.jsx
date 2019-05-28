import React from "react";
import Main from "../main/main";
import PropTypes from "prop-types";

const App = (props) => {
  return <Main
    films = {props.films}
  />;
};

App.propTypes = {
  films: PropTypes.array.isRequired,
};

export default App;
