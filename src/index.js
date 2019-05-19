import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const init = () => {
  const FILMS = [
    {
      title: `Fantastic Beasts: The Crimes of Grindelwald`,
      img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
      src: `fantastic-beasts-the-crimes-of-grindelwald`,
    },
    {
      title: `Bohemian Rhapsody`,
      img: `img/bohemian-rhapsody.jpg`,
      src: `bohemian-rhapsody`,
    },
    {
      title: `Macbeth`,
      img: `img/macbeth.jpg`,
      src: `macbeth`,
    },
    {
      title: `Aviator`,
      img: `img/aviator.jpg`,
      src: `aviator`,
    },
    {
      title: `We need to talk about Kevin`,
      img: `img/we-need-to-talk-about-kevin.jpg`,
      src: `we-need-to-talk-about-kevin`,
    },
  ];


  ReactDOM.render(
      <App
        films = {FILMS}
      />,
      document.querySelector(`#root`)
  );
};

init();
