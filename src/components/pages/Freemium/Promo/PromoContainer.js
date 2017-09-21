import React, { Component } from 'react';

class PromoContainer extends Component {
    render() {
        return (

            <div className="row">
                <div className="col s12 m12 l12">
                    <p className="center freemium-header"><b>Apply Your Promo Code Here</b></p>
                    <p className="center freemium-subheader">You Will Get Free Premium Service</p>

                <div className="center">
                    <input type="text" className="promo seventywidth" maxLength={6}  />
                    <button className="waves-effect waves-light btn seventywidth pink darken-2 mt-40px">
                        <img src="assets/img/promo.svg" className="vm" width="20px" alt="promo" />&nbsp;Apply &nbsp;
                    </button>
                </div>
                </div>
            </div>
        );
    }

}

export default PromoContainer;