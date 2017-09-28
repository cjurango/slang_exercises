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
    return (
      <Speech autostart={false} rate="0.8" text={word} lang="en-US"
      voice="Google US English" className="speech" styles="" />
    );
  }
}

export default PronunciationSound;
