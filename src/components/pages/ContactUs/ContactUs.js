import React, {Component} from 'react';
import ModalInvite from "../../modals/ModalInvite";
import Preloader from "../../global/Preloader";
import Sidebar from "../../header/Sidebar";
import GlobalNavBar from "../../global/GlobalNavBar";
import ContactUsContainer from "./ContactUsContainer";



class ContactUs extends Component {
    render() {
        return (
            <div>
                <ModalInvite/>
                <Preloader/>
                <Sidebar />
                <div className="main-panel">
                    <GlobalNavBar />
                    <ContactUsContainer />
                </div>
            </div>
        );
    }
}


export default ContactUs;