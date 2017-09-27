import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { observer, inject } from 'mobx-react';

import Header from '../../components/Header/header';
import Exercise from '../../components/Exercise/exercise';
import Footer from '../../components/Footer/footer';

import ExerciseStore from '../../stores/exerciseStore/exercise.store'; 

import './index.less';

@inject('exerciseStore') @observer
class Index extends React.Component<{ exerciseStore?: ExerciseStore }, {}> {
  render() {
    const { exerciseStore } = this.props;
    return (
      <div className="index">
        <Header></Header>
        <Exercise></Exercise>
        <Footer></Footer>
      </div>
    );
  }
}

export default Index;