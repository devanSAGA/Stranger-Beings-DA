import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from '../components/header/header';
// import HomePage from '../components/homePage';
// import SemesterOne from "../components/semesterOne";
// import SemesterTwo from "../components/semesterTwo";
// import SemesterThree from "../components/semesterThree";
// import SemesterFour from "../components/semesterFour";
// import SemesterFive from "../components/semesterFive";
// import SemesterSix from "../components/semesterSix";
// import SemesterSeven from "../components/semesterSeven";
// import SemesterEight from "../components/semesterEight";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
            <Header />
            <Switch>
                {/* <Route path="/" component={HomePage} exact /> */}
                {/* <Route path="/semester1" component={SemesterOne}  />
                <Route path="/semester2" component={SemesterTwo} exact />
                <Route path="/semester3" component={SemesterThree} exact />
                <Route path="/semester4" component={SemesterFour} exact />
                <Route path="/semester5" component={SemesterFive} exact />
                <Route path="/semester6" component={SemesterSix} exact />
                <Route path="/semester7" component={SemesterSeven} exact />
                <Route path="/semester8" component={SemesterEight} exact />                 */}
            </Switch>
            </div>
        </BrowserRouter>
    );
    };

export default AppRouter;