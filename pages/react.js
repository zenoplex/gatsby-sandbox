// @flow
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import { Button } from 'stardust';

type State = {
  count: number;
}

export default class ReactComponent extends Component {
  state: State = {
    count: 0,
  };

  handlePlusClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleMinusClick = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <Helmet
          title={`${config.siteTitle} | React.js components`}
        />
        <h1>React.js components</h1>
        <h3>Counter example</h3>
        <p>{this.state.count}</p>
        <Button onClick={this.handlePlusClick}>+</Button>
        <Button onClick={this.handleMinusClick}>-</Button>
      </div>
    );
  }
}
