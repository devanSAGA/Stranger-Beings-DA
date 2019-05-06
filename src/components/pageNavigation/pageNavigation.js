import React from 'react';
import './pageNavigation.css';
import { withRouter } from 'react-router' 



const PageNavigation = (props) => {
    return (
        <div className="navigation-controls">
            {props.prevPageText && <div onClick={() => {props.history.push(props.prevPageLink)}}>{`<< ${props.prevPageText}`}</div>}
            {props.nextPageText && <div onClick={() => {props.history.push(props.nextPageLink)}}>{`${props.nextPageText} >>`}</div>}
        </div>
    );
}

export default withRouter(PageNavigation);