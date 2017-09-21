import React, { Component } from 'react';

class ModalInvite extends Component {
    render() {
        return (
            <div id="modal_share" className="modal bottom-sheet">
                <div className="modal-content">
                    <h6>Share</h6>



                    <ul className="collection">
                        <li className="collection-item avatar">
                            <img src="https://cdn2.iconfinder.com/data/icons/the-circle-icons/513/Facebook.png" className="circle" alt="fb" />
                                <span className="title">Facebook</span>
                                <p>Share us On Facebook
                                </p>
                        </li>
                        <li className="collection-item avatar">
                            <img src="http://www.rpost.com/wp-content/uploads/2016/06/Linkedin_circle.svg_.png"  className="circle" alt="LinkedIn" />
                                <span className="title">LinkedIn</span>
                                <p>Find us on LinkedIn
                                </p>
                        </li>
                        <li className="collection-item avatar">
                            <img src="http://is1.mzstatic.com/image/thumb/Purple127/v4/ba/a3/ec/baa3ec06-4110-43db-0fe3-5d728002a2b0/source/1200x630bb.jpg" className="circle" alt="Instagram" />
                                <span className="title">Instagram</span>
                                <p>Find us on Instagram
                                </p>
                        </li>


                    </ul>



                </div>
            </div>
        );
    }}

export default ModalInvite;
