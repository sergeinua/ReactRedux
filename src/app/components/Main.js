import React from "react";

export const Main = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-xs-12">
                    <h1>Main page</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12">
                    <button className="btn btn-primary"
                            onClick={()=> props.changeUsername('wodjojd')}>change name
                    </button>
                    <button className="btn btn-primary"
                            onClick={()=> props.changeUserage('2000')}
                    >change age</button>
                </div>
            </div>
        </div>
    );
};