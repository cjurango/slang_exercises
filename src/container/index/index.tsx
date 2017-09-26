import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';

import NameStore from '../../stores/nameStore/name.store'; 

import "./index.less";

@inject("nameStore") @observer 
export default class Index extends React.Component<{nameStore?: NameStore}, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    const { nameStore } = this.props;
    return (
      <div id="index">
        <div>Enter your name:</div>
        <input  type="text" 
                value={nameStore.name}
                onChange={(event) => nameStore.setName((event.target as HTMLInputElement).value)}
        />
        {nameStore.name && <div>
          <div>Hi {nameStore.name}!</div>
        </div>}
      </div>
    );
  }
};