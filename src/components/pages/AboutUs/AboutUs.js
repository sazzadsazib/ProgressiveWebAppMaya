import React, {Component} from 'react';
import ModalInvite from "../../modals/ModalInvite";
import Preloader from "../../global/Preloader";
import GlobalNavBarBack from "../../global/GloablNavBarBack";
import AboutUsContainer from "./AboutUsContainer";



class AboutUs extends Component {
    render() {
        return (
            <div className="aboutmaya-bg">
                <ModalInvite/>
                <Preloader/>
                <GlobalNavBarBack/>

                <div className="row mt-70">
                    <div className="mt-10 maya-bg"> &nbsp;</div>
                    <AboutUsContainer/>
                </div>
                <div className="fill-aboutus">&nbsp;</div>
            </div>
        );
    }
}


export default AboutUs;