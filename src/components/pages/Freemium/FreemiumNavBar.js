import React, { Component } from 'react';

class FreemiumNavBar extends Component {
    render() {
        return (
                <div>
                    <div className="row maya-bg">
                        <div className="col s12 m12 l12">
                            <button className="transparenet-button-right pink darken-2 float-left">
                                <img src="assets/img/back.svg" className="back-noheader" alt=""/>
                            </button>
                            <img src="assets/img/gift-white.png" className="float-right giftfix" alt="" />
                            <div className="header">
                                <h5 className="bold">Invite</h5>
                                <h6 className="">Get Rewards</h6>
                            </div>
                        </div>
                    </div>
                </div>

        );
    }

}

export default FreemiumNavBar;
