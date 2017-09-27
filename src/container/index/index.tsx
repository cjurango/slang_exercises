import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Header from '../../components/Header/header';
import Exercise from '../../components/Exercise/exercise';
import Footer from '../../components/Footer/footer';

import "./index.less";

const Index = () => 
  <div className="index">
    <Header></Header>
    <Exercise></Exercise>
    <Footer></Footer>
  </div>;

export default Index;