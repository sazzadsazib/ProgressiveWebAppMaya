import React, {Component} from 'react';
import Preloader from "../../global/Preloader";
import ModalInvite from "../../modals/ModalInvite";
import MayaPlusNavBar from "./MayaPlusNavBar";
import MayaPlusContent from "./MayaPlusContent";



class MayaPlus extends Component {
    render() {
        return (
            <div className="notification-bg fill-plus">
                <ModalInvite/>
                <Preloader/>

                <MayaPlusNavBar/>

                <div className="row mt-60">
                    <div className="mt-10 maya-bg"> &nbsp;</div>
                  <MayaPlusContent/>





                    {/*<div className="fill-plus"> </div>*/}

                </div>
            </div>

        );
    }
}


export default MayaPlus;