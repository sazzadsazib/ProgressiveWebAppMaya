import React, {Component} from 'react';
import PromoNavBar from "./PromoNavBar";
import PromoContainer from "./PromoContainer";
import Preloader from "../../../global/Preloader";


class Promo extends Component {
    render() {
        return (
            <div>
                <Preloader/>
                <PromoNavBar/>
                <PromoContainer/>
            </div>
        );
    }
}

export default Promo;