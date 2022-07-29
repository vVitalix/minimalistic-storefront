import React, { Component } from "react";
import { Link } from "react-router-dom";
//STYLES
import StyledPageNotFound from "../styles/PageNotFound.styled";

class PageNotFound extends Component {
    render() {
        return (
            <StyledPageNotFound>
                <h1>404. Page Not Found</h1>
                <p>
                    The page you are looking for may have existed once and may
                    be available again. But for now it is nowhere to be found.
                    Please use our navigation to move on to a page which we are
                    100% sure will exist.
                </p>
                <Link to="/">Click here to return to the homepage</Link>
            </StyledPageNotFound>
        );
    }
}

export default PageNotFound;
