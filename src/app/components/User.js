import React from "react";

export class User extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <h1>User page</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <p>username: {this.props.username}</p>
                    </div>
                </div>
            </div>
        );
    }
}