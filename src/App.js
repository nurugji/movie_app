import React from "react";

class App extends React.Component {
  state = {
    count: 0,
  };
  add = function () {
    console.log("add");
  };
  minus = function () {
    console.log("minus");
  };
  render() {
    return (
      <div>
        <h1>This is number : {this.state.count}</h1>
        <button
          onClick={function (event) {
            event.preventDefault();
            console.log(this);
            this.add();
          }.bind(this)}
        >
          Add
        </button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
