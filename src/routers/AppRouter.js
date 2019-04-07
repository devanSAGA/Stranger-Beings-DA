import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "../components/header/header";
import HomePage from "../pages/homePage/homePage";
import SemesterOne from "../pages/semesterOne/semesterOne";
import SemesterTwo from "../pages/semesterTwo/semesterTwo";
import SemesterThree from "../pages/semesterThree/semesterThree";
import SemesterFour from "../pages/semesterFour/semesterFour";
import SemesterFive from "../pages/semesterFive/semesterFive";
import SemesterSix from "../pages/semesterSix/semesterSix";
import SemesterSeven from "../pages/semesterSeven/semesterSeven";
import SemesterEight from "../pages/semesterEight/semesterEight";
import RIPage from "../pages/ripage/ripage";
import Random from "../pages/randomPage/randomPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/semester1" component={SemesterOne} />
          <Route path="/semester2" component={SemesterTwo} />
          <Route path="/semester3" component={SemesterThree} />
          <Route path="/semester4" component={SemesterFour} />
          <Route path="/semester5" component={SemesterFive} />
          <Route path="/semester6" component={SemesterSix} />
          <Route path="/semester7" component={SemesterSeven} />
          <Route path="/semester8" component={SemesterEight} />
          <Route path="/rural-internship" component={RIPage} />
          <Route path="/random" component={Random} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default AppRouter;
