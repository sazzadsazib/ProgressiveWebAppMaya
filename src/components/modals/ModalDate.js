import React, { Component } from 'react';

class ModalDate extends Component {
    render() {
        return (

            <div id="modal_date" className="modal modal-fixed-footer ">
                <div className="modal-content">
                    <p className="maya-color fix_modal_header">Select Date</p>
                    <form>
                        <input type="date" className="datepicker-fix-box datepicker"  />

                    </form>

                </div>
                <div className="modal-footer">
                    <a className="modal-action modal-close waves-effect btn-flat center">Search</a>
                </div>
            </div>

        );
    }}

export default ModalDate;


