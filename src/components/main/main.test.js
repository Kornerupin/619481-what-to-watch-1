import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";

it(`Testing someone`, () => {
  const clickHandler = () => {};
  const FILMS = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Aviator`];
  const tree = renderer
    .create(
        <Main
          films={FILMS}
          onclick={clickHandler}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
