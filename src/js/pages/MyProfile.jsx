import React from "react";
import axios from "axios";
import { Router } from "react-router";
import Select from "react-select";
import List from "../components/ProblemList.jsx";

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

export default class MyProblems extends React.Component {

    login = this.props.location.state.login;
    username = localStorage.getItem("userLogged");
    state = {
        showModal: false,

    };


    componentDidMount() {

    }


    render() {
   

        return (
            <div>
                <h1>My Profile</h1>

            </div>
        );
    }

}