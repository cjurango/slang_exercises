import React, { Component } from 'react'
import { render } from 'react-dom';
import { observer } from 'mobx-react';
import { string } from 'prop-types';
import Speech from 'react-speech';

export interface PronunciationListProps { 
  word: string;
}

@observer
class PronunciationSound extends Component<PronunciationListProps, {}> {

  static propTypes = {
    word: string
  };

  render() {
    const { word } = this.props;
    const speechstyle = {
      play: {
        hover: {
          backgroundColor: 'rgb(89, 156, 242)',
          color:'white'
        },
        button: {
          padding:'4',
          fontFamily: 'Helvetica',
          fontSize: '1.0em',
          cursor: 'pointer',
          pointerEvents: 'none',
          outline: 'none',
          backgroundColor: 'rgb(162, 203, 255)',
          border: 'none',
          width: '3em',
          height: '3em',
          borderRadius: '3em',
          margin: '-1.5em'
        }
      }
    };
    return (
      <Speech styles={speechstyle}  autostart={false} rate="0.8" text={word} lang="en-US"
      voice="Google US English" />
    );
  }
}

export default PronunciationSound;
