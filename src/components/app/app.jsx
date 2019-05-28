import React, {PureComponent} from "react";
import Main from "../main/main";
import PropTypes from "prop-types";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: -1,
    };
  }

  render() {
    const clickHandler = () => {};

    return <Main
      films = {this.props.films}
      onclick = {clickHandler}
      onCardOver = {(index) => {
        this.setState({
          activeCard: parseInt(index, 10),
        });
        console.log(index);
      }}
    />;
  }
}

App.propTypes = {
  films: PropTypes.array.isRequired,
};

export default App;
