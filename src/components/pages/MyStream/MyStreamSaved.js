import React, { Component } from 'react';
import QuestionCard from "../../global/QuestionCard";

class MyStreamSaved extends Component {
    render() {
        return (
            <div id="savedques" className="col s12  maya-bg">

                <div className="row vh40 mt-15">
                <QuestionCard/>
                <QuestionCard/>
                <QuestionCard/>

                </div>

            </div>
        );
    }
}

export default MyStreamSaved;
