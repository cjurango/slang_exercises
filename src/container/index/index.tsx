import React, { Component } from 'react'
import { render } from 'react-dom';
import { observer, inject } from 'mobx-react';
import { object } from 'prop-types';

import Header from '../../components/Header/header';
import Exercise from '../../components/Exercise/exercise';
import Footer from '../../components/Footer/footer';
import ExerciseStore from '../../stores/exerciseStore/exercise.store'; 
import './index.less';

export interface IndexListProps { 
  exerciseStore: ExerciseStore;
}

@inject('exerciseStore')
@observer
class Index extends Component<IndexListProps, {}> {

  static propTypes = {
    exerciseStore: object.isRequired
  }

  render() {
    const { exerciseStore } = this.props;
    const body = (() => {
      if (exerciseStore.exercise) {
        return <Exercise exercise={exerciseStore.exercise}
               nextExercise={exerciseStore.nextExercise}
               submitAnswer={exerciseStore.submitAnswer}></Exercise>;
      } else {
        return <div className="start">
          <p className="message">Click here to start your english adventure...</p>
          <button onClick={ exerciseStore.nextExercise }>
          Start Learning</button>
          </div>;
      }
    })();
    return (
      <div className="index">
        <Header progress={exerciseStore.progress}></Header>
        {body}
        <Footer></Footer>
      </div>
    );
  }
}

export default Index;