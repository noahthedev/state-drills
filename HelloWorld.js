import React from 'react';

class HelloWorld extends React.Component {
    state = {
      who: 'World'
    };

  handleFriendButton = () => {
    this.setState({who: 'Friend'})
  }
  handleWorldButton = () => {
    this.setState({who: 'World'})
  }
  handleReactButton = () => {
    this.setState({who: 'React'})
  }

  render() {
    return (
      <div>
        <p>Hello, {this.state.who} </p>
        <button onClick={this.handleWorldButton}>World</button>
        <button onClick={this.handleFriendButton}>Friend</button>
        <button onClick={this.handleReactButton}>React</button>
      </div>
    )
  }
}

export default HelloWorld