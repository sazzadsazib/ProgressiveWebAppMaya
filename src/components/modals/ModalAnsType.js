import React, { Component } from 'react';

class ModalAnsType extends Component {
    render() {
        return (


            <div id="modal_ans_type" className="modal modal-fixed-footer type" height="300vh">
                <div className="modal-content">
                    <p className="maya-color fix_modal_header">Answer Type</p>
                    <form action="#">
                        <p>
                            <input name="group1" type="radio" id="all_type" />
                            <label htmlFor="all_type">All</label>
                        </p>
                        <p>
                            <input name="group1" type="radio" id="answered_type" />
                            <label htmlFor="answered_type">Answered</label>
                        </p>
                        <p>
                            <input name="group1" type="radio" id="Unanswered_type" />
                            <label htmlFor="Unanswered_type">Unanswered</label>
                        </p>


                    </form>

                </div>
                <div className="modal-footer">
                    <a href="#!" className="modal-action modal-close waves-effect btn-flat ">Search</a>
                </div>
            </div>


        );
    }}

export default ModalAnsType;

