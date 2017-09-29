import React, { Component } from 'react'
import { render } from 'react-dom';
import { observer } from 'mobx-react';
import { number } from 'prop-types';

import './header.less';

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
        <p className="title"><strong>Slang Spelling </strong>English spelling exercises</p>
        <p className="progress">Your progress: { progress }%</p>
      </div>
    );
  }
}

export default Header;
