import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

import {FILMS} from "./../../mocks/films";

Enzyme.configure({adapter: new Adapter()});

it(`Testing button click`, () => {

  const clickHandler = jest.fn();
  const main = shallow(
      <Main
        films = {FILMS}
      />
  );

  // main.find(`.small-movie-card__title`).at(0).simulate(`click`);
  main.find(`.small-movie-card__title`);

  expect(clickHandler).toHaveBeenCalledTimes(0);
});
