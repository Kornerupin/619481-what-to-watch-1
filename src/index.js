import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

import {FILMS} from "./mocks/films";

const init = (films) => {
  ReactDOM.render(
      <App
        films = {films}
      />,
      document.querySelector(`#root`)
  );
};

init(FILMS);
