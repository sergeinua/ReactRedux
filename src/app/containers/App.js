import React from "react";
import { render } from "react-dom";
import { connect } from "react-redux";


import { User } from "../components/User";
import { Main } from "../components/Main";
import { setName, setAge, setFieldVal, sendForm } from "../actions";
import { Field } from "../components/Field";
import { Form } from "../components/Form";

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Main
                    changeUsername={(name) => this.props.setName(name)}
                    changeUserage={(age) => this.props.setAge(age)}
                />
                <User username={this.props.user.name}/>
                <Field 
                    changeFieldVal={(newVal) => this.props.setFieldVal(newVal)}
                    fieldData={this.props.field.field_val}
                />
                <Form
                    sendForm={(name, email) => {this.props.submitForm(name, email)}}
                    name={this.props.form.name}
                    email={this.props.form.email}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        math: state.math,
        field: state.field,
        form: state.form
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch(setName(name));
        },
        setAge: (age) => {
            dispatch(setAge(age));
        },
        setFieldVal: (newVal) => {
            dispatch(setFieldVal(newVal));
        },
        submitForm: (name, email) => {
            dispatch(sendForm(name, email));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);