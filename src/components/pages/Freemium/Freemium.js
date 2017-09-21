import React, {Component} from 'react';
import FreemiumNavBar from "./FreemiumNavBar";
import FreemiumContainer from "./FreemiumContainer";
import Preloader from "../../global/Preloader";
import ModalInvite from "../../modals/ModalInvite";


class Freemium extends Component {
    render() {
        return (
            <div>
                <Preloader/>
                <ModalInvite/>
               <FreemiumNavBar/>
                <FreemiumContainer/>
            </div>
        );
    }
}

export default Freemium;