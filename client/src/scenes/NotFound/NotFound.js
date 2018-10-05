import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {OrgSearch} from "../../components/OrgSearch";

class NotFound extends Component {
  render() {
    return (
      <div className="offset-sm-2 col-sm-8 text-align-center">
        <h2>404</h2>
        <p><strong>Uh oh!</strong> It seems like the page you're looking for doesn't exist.</p>
        <p className="muted">Try returning to <Link to="/">the main page</Link>.</p>
      </div>
    );
  }
}

export { NotFound };