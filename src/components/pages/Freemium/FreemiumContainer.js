import React, { Component } from 'react';

class FreemiumContainer extends Component {
    render() {
        return (
            <div className="row">
                <div className="col s12 m12 l12">
                    <p className="center freemium-header">Excited to Get New Offer</p>
                    <p className="center freemium-subheader">Invite friends to Maya Apa. After the first 5 install, We will reward you with <b>50 Taka Flexiload</b></p>

                    <div className="center">
                        <a href="#modal_share" className="waves-effect waves-light btn seventywidth pink darken-2 mt-50px">
                            <img src="assets/img/gift.svg" class="vm" width="20px" alt=""/> &nbsp;Invite To Maya Apa
                        </a>
                        <a href="/promo" className="waves-effect waves-light btn seventywidth pink darken-2 mt-40px">
                            <img src="assets/imf/promo.svg" class="vm" width="20px" alt=""/>&nbsp;Apply Promo Code &nbsp;
                        </a>
                    </div>
                </div>
            </div>
        );
    }

}

export default FreemiumContainer;