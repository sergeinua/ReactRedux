import React from "react";
import { Link } from "react-router";

export class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><Link to={"/home"} activeStyle={{color: "red"}} activeClassName={"active"}>Home</Link></li>
                            <li><Link to={"/user/1"} activeStyle={{color: "red"}} activeClassName={"active"}>User</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}