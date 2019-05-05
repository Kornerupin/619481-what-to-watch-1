import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

Enzyme.configure({adapter: new Adapter()});

it(`Testing button click`, () => {
  const FILMS = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Aviator`];
  const clickHandler = jest.fn();
  const main = shallow(
      <Main
        films = {FILMS}
        onclick = {clickHandler}
      />
  );

  main.find(`.small-movie-card__title`).at(0).simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
