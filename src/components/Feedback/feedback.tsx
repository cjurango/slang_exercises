import React, { Component } from 'react'
import { render } from 'react-dom';
import { observer } from 'mobx-react';
import { boolean } from 'prop-types';

import './feedback.less';

export interface FeedbackListProps {
  accurate: boolean;
  submitted: boolean;
}

@observer
class Feedback extends Component<FeedbackListProps, {}> {

  static propTypes = {
    accurate: boolean,
    submitted: boolean
  }

  render() {
  	const { submitted, accurate } = this.props;
    const badImage = require('./bad.png');
    const okImage = require('./ok.png');
    const feedback = (() => {
      if (submitted) {
        if (accurate) {
          return <span>
                   <p className="correct">Correct Answer, congratulations!</p>
                   <img className="image" src={okImage}/>
                 </span>;
        } else {
          return <span>
                   <p className="incorrect">Incorrect Answer!</p>
                   <img className="image" src={badImage}/>
                 </span>;
        }
      } else {
        return <p className="instructions">Click in the letter to spell the word pronounced above</p>;
      }
    })();
    return (
      <div className="feedback">
        {feedback}
      </div>
    );
  }
}

export default Feedback;
