import React, { Component } from 'react'
import { render } from 'react-dom';
import { observer } from 'mobx-react';
import { number } from 'prop-types';

export interface HeaderListProps {
  progress: number;
}

@observer
class Header extends Component<HeaderListProps, {}> {

  static propTypes = {
    progress: number
  }

  render() {
  	const { progress } = this.props;
    return (
      <div className="header">
        <p>This is a wonderfull app to practice english spelling exercises</p>
        <p>Your overal progress is: { progress }%</p>
      </div>
    );
  }
}

export default Header;
