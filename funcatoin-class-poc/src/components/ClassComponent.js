import React from "react";

class App extends React.Component {
  state = {
    counter: 0,
  };

  render() {
    return (
      <>
        <h1>Counter value: {this.state.counter}</h1>
        <button
          onClick={() =>
            this.setState((prevState) => ({
              counter: prevState.counter + 1,
            }))
          }
        >
          Change
        </button>
      </>
    );
  }
}

export default App;
