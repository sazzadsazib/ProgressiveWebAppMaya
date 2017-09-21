import React, { Component } from 'react';

class QuestionCard extends Component {
    render() {
        return (
            <a href="/ansdetails"><div className="col s12 m6 l3">
                <div className="card grey lighten-5">
                    <div className="card-content">
                        <img src="assets/img/question-icon.png" width="30px" className="float-left" alt="question"/> <p className="time_layout">25th Jun 2017</p>
                    </div>
                    <div className="card-content black-text roboto-slab">
                        <p>This is latest card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div className="card-action">
                        <div className="card-footer">
                            <a  className="card-footer-item">
                                <img id="imgToggle" src="assets/img/heart-nofill.png"   data-swap='assets/img/heart.png' data-src='assets/images/heart-nofill.png' width="25px" alt="heart"/>
                            </a>
                            <a className="card-footer-item">
                                <img src="assets/img/comment.png" width="25px" alt="comment"/>
                            </a>
                            <a className="card-footer-item">
                                <img src="assets/img/share.svg" width="25px" alt="share" />
                            </a>
                        </div>
                    </div>
                </div>
            </div></a>
        );
    }}

export default QuestionCard;
