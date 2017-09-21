import React, {Component} from 'react';
import Preloader from "../../global/Preloader";
import NotificationsCard from "./NotificationsCard";
import ModalInvite from "../../modals/ModalInvite";
import GlobalNavBar from "../../global/GlobalNavBar";


class Notifications extends Component {
    render() {
        return (
            <div className="notification-bg">
                <ModalInvite/>
                <Preloader/>
                <GlobalNavBar/>

                <div className="row mt-70">
                    <div className="mt-10 maya-bg"> &nbsp;</div>


                    <NotificationsCard/>
                    <NotificationsCard/>
                    <NotificationsCard/>
                    <NotificationsCard/>
                    <NotificationsCard/>
                    <NotificationsCard/>
                    <NotificationsCard/>
                    <NotificationsCard/>
                    <NotificationsCard/>
                    <NotificationsCard/>
                    <NotificationsCard/>
                    <NotificationsCard/>



                    <div className="fill-notification"></div>

                </div>
            </div>
        );
    }
}


export default Notifications;