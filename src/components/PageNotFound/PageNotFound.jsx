import React, { Component } from "react";
import { Link } from "react-router-dom";

class PageNotFound extends Component {
  render() {
    return (
      <section>
        <h2>Page Not Found</h2>
        <p>
          The page you are looking for may have existed once and may be available again. But for now
          it is nowhere to be found. Please use our navigation to move on to a page which we are
          100% sure will exist.
        </p>
        <Link to="/">Click here to return to the homepage</Link>
      </section>
    );
  }
}

export default PageNotFound;
