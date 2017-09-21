import React, {Component} from 'react';
import Preloader from "../../global/Preloader";
import ModalInvite from "../../modals/ModalInvite";
import GlobalNavBar from "../../global/GlobalNavBar";
import FaqContainer from "./FaqContainer";


class Faq extends Component {
    render() {
        return (
            <div className="notification-bg">
                <ModalInvite/>
                <Preloader/>
                <GlobalNavBar/>

                <div className="row mt-70">
                    <div className="mt-10 maya-bg"> &nbsp;</div>
                    <FaqContainer/>


                </div>
            </div>
        );
    }
}


export default Faq;