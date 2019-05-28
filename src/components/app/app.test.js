import React from "react";
import renderer from "react-test-renderer";
import App from "./app";

import {FILMS} from "./mocks/films";

it(`Testing someone`, () => {

  const tree = renderer.create(
      <App
        films = {FILMS}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
