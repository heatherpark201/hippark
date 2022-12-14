import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import Navigation from "./components/Navigation";
import SpotsIndexPage from "./components/SpotsIndexPage";
import SpotShowPage from "./components/SpotShowPage";
import Homepage from "./components/Homepage";



function App() {
    let match = useRouteMatch("/signup")
    return (
        <>
          {!match && <Navigation />}
          <Switch>
            <Route path="/signup">
              <SignupFormPage />
            </Route>
            <Route path="/signin">
              <LoginFormPage />
            </Route>
            <Route path="/spots/:place/:guests">
              <SpotsIndexPage />
            </Route>
            <Route path="/spots/:spotId">
              <SpotShowPage />
             </Route>
            <Route exact path="/spots">
              <SpotsIndexPage />
            </Route>
            <Route path="/">
              <Homepage/>
            </Route>
          </Switch>
        </>
    );
  }
  
  export default App;
  