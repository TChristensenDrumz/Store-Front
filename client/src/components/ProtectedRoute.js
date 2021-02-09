import React from "react";
import { Redirect } from "react-router-dom";
import Token from "../utils/Token";

class ProtectedRoute extends React.Component {
    render() {
        const Component = this.props.component;
        let isSeller = Token.isSeller();
       
        return isSeller ? (
            <Component />
        ) : (
            <Redirect to="/login" />
        );
    };
};

export default ProtectedRoute;