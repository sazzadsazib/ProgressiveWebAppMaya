import React, { Component } from 'react';

class ModalCatagory extends Component {
    render() {
        return (

            <div id="modal_catagory" className="modal modal-fixed-footer">
                <div className="modal-content">
                    <p className="maya-color fix_modal_header">Select Topic</p>
                    <form action="#">
                        <p>
                            <input name="group1" type="radio" id="test1" />
                            <label htmlFor="test1">All</label>
                        </p>
                        <p>
                            <input name="group1" type="radio" id="test2" />
                            <label htmlFor="test2">Health</label>
                        </p>
                        <p>
                            <input name="group1" type="radio" id="test3" />
                            <label htmlFor="test3">Sex Education</label>
                        </p>
                        <p>
                            <input name="group1" type="radio" id="test4" />
                            <label htmlFor="test4">Pregnancy</label>
                        </p>
                        <p>
                            <input name="group1" type="radio" id="test5" />
                            <label htmlFor="test5">Lifestyle</label>
                        </p>
                        <p>
                            <input name="group1" type="radio" id="test6" />
                            <label htmlFor="test6">Parenting Children</label>
                        </p>
                        <p>
                            <input name="group1" type="radio" id="test7" />
                            <label htmlFor="test7">Social Issues</label>
                        </p>
                        <p>
                            <input name="group1" type="radio" id="test8" />
                            <label htmlFor="test8">Other</label>
                        </p>

                    </form>

                </div>
                <div className="modal-footer">
                    <a href="#!" className="modal-action modal-close waves-effect btn-flat ">Search</a>
                </div>
            </div>

        );
    }}

export default ModalCatagory;

