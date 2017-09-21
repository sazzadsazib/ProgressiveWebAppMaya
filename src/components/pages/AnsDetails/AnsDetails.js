import React, {Component} from 'react';
import ModalInvite from "../../modals/ModalInvite";
import Preloader from "../../global/Preloader";
import GlobalNavBarBack from "../../global/GloablNavBarBack";
import AnsDetailsContainer from "./AnsDetailsContainer";



class AnsDetails extends Component {
    render() {
        return (
            <div className="ansdetailsStyle">
                <ModalInvite/>
                <Preloader/>
                <GlobalNavBarBack/>

                <div className="row mt--10">
                    <div className="mt-10 maya-bg"> &nbsp;</div>
                    <AnsDetailsContainer/>
                </div>
                <div className="fill-aboutus">&nbsp;</div>
            </div>
        );
    }
}


export default AnsDetails;