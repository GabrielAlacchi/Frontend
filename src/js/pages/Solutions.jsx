import React from "react"

export default class Solutions extends React.Component {
    problem = this.props;
    render() {

        return(
            <div>
                <h1>{this.problem.name}</h1>
                <p>{this.problem.description}</p>

            </div>
        );
    }
}