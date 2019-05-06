import React from "react";
import renderer from "react-test-renderer";
import App from "./app";


it(`Testing someone`, () => {
  const FILMS = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Aviator`];
  const tree = renderer.create(
      <App
        films = {FILMS}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
