import React, { Component } from 'react';
import QuestionCard from "../../global/QuestionCard";

class MyStreamMyMaya extends Component {
    render() {
        return (
            <div id="mymaya" className="col s12  maya-bg">

                <div className="row vh40 mt-15">

                    <QuestionCard/>
                    <QuestionCard/>

                </div>

            </div>
        );
    }
}

export default MyStreamMyMaya;
