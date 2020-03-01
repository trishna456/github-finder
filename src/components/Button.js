import React, { Component } from 'react';

class Button extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  updateCount() {
    this.setState((prevState, props) => {
      console.log('prev state is', prevState);
      console.log('this.state is ', this.state);
      return { count: prevState.count + 1 };
    });

    // this.setState({
    //   count: this.state.count + 1
    // });
    this.newCont();
  }

  newCont = () => {
    this.setState(prevState => {
      console.log('prev state2 is', prevState);
      console.log('this.state2 is ', this.state);
      return { count: prevState.count + 1 };
    });

    // this.setState({
    //   count: this.state.newCount + 1
    // });
  };

  render() {
    return (
      <button
        onClick={() => {
          const res = this.updateCount();
          //console.log('result is ', res);
        }}
      >
        Clicked {this.state.count} times
      </button>
    );
  }
}

export default Button;
