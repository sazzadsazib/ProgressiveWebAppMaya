import React, { Component } from 'react';
import QuestionCard from "../../global/QuestionCard";

class StreamPopular extends Component {
    render() {
        return (
            <div id="popular" className="col s12">
                <div className="fixed-action-btn horizontal " id="hidetoggle">
                    <a  href="/" className="btn-floating btn-large light-green ">
                        <i className="material-icons">settings_voice</i>
                    </a>
                </div>
                <div className="row vh73">
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard/>

                </div>
            </div>
        );
    }
}

export default StreamPopular;
