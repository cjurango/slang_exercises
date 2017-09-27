import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { observer, inject } from 'mobx-react';

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
class Index extends React.Component<IndexListProps, {}> {
  render() {
    const { exerciseStore } = this.props;
    const body = exerciseStore.exercise ? (
      <Exercise exercise={exerciseStore.exercise}
                nextExercise={exerciseStore.nextExercise}
                submitAnswer={exerciseStore.submitAnswer}>
      </Exercise>) :
      (<button className="next-exercise"
               onClick={ exerciseStore.nextExercise }>
      Start Learning</button>)
    return (
      <div className="index">
        <Header></Header>
        {body}
        <Footer></Footer>
      </div>
    );
  }
}

export default Index;