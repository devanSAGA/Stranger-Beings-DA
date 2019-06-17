import React from 'react';
import './pageNavigation.css';
import { withRouter } from 'react-router';

const PageNavigation = props => {
  return (
    <div className="navigation-controls">
      {props.prevPageText && (
        <div
          className="left"
          onClick={() => {
            props.history.push(props.prevPageLink);
          }}
        >{`<< ${props.prevPageText}`}</div>
      )}
      {props.nextPageText && (
        <div
          className="right"
          onClick={() => {
            props.history.push(props.nextPageLink);
          }}
        >{`${props.nextPageText} >>`}</div>
      )}
    </div>
  );
};

export default withRouter(PageNavigation);
