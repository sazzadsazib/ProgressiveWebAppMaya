import React, { Component } from 'react';

class LocalLangModal extends Component {
    render() {
        return (


            <div id="modal-language" className="modal bottom-sheet">
                <div className="modal-content">
                    <h5><b>Choose Language</b></h5>


                    <ul className="collection">
                        <li className="collection-item avatar">
                            <img src="assets/img/bangladesh_flag.png" alt="BAN" className="circle" />
                                <span className="title">BANGLA</span>
                                <p>Select Bangla as Your Language
                                </p>
                        </li>
                        <li className="collection-item avatar">
                            <img src="assets/img/uk_flag.png" alt="EN" className="circle" />
                                <span className="title">ENGLISH</span>
                                <p>Select English As your Language
                                </p>
                        </li>
                    </ul>
                </div>
            </div>


        );
    }}

export default LocalLangModal;


