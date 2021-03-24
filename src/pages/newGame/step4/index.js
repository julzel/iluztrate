import React from 'react';
import { withRouter } from 'react-router-dom'
import Summary from '../../../components/summary';

import "./Step4.scss";

const Step4 = ({ startOver, gameReview, history }) => {
  return (
    <div className="step step4">
      <Summary startOver={startOver} history={history} gameReview={gameReview} />
    </div>
  );
};

export default withRouter(Step4);
