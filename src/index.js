import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const init = () => {
  const FILMS = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Aviator`];

  ReactDOM.render(
      <App
        films = {FILMS}
      />,
      document.querySelector(`#root`)
  );
};

init();
