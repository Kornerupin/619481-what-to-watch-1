import React from "react";
import renderer from "react-test-renderer";
import App from "./app";


it(`Testing someone`, () => {
  const clickHandler = () => {};
  const FILMS = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Aviator`];
  const tree = renderer.create(
      <App
        films={FILMS}
        onclick={clickHandler}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
