import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Landing} from "./Landing/Landing" // landing page
import {Profile} from "./Profile/Profile" // profile page
import {Org} from "./Org/Org"; // org page
import {NotFound} from "./NotFound/NotFound"; // page not found

/**
 * Because this single page app is so simple, it is sufficient to switch
 * between rendering the Landing component, the Profile component, and the
 * Org component, and let each of these components handle their own logic.
 *
 * @returns the jsx to be rendered
 */
export function Page(props) {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route path="/profile/:primary_email" render={props =>
            <Profile primary_email={props.match.params.primary_email}/>
          }/>
          <Route path="/org/:name" render={props =>
            <Org name={props.match.params.name}/>
          }/>
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}


/*
Useful code:

fetch('/api/getList')
    .then(res => res.json())
    .then(list => this.setState({ list }))
 */