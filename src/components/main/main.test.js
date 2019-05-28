import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";

import {FILMS} from "./../../mocks/films";

it(`Testing someone`, () => {
  const tree = renderer
    .create(
        <Main
          films={FILMS}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
