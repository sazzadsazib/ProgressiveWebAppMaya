import React, {Component} from 'react';
import Preloader from "../../global/Preloader";
import LocalLangModal from "./LocalLangModal";
import SettingsContainer from "./SettingsContainer";
import GlobalNavBarBack from "../../global/GloablNavBarBack";
import ModalInvite from "../../modals/ModalInvite";


class Settings extends Component {
    render() {
        return (
            <div>
                <Preloader />
                <ModalInvite/>
                <LocalLangModal/>
                <GlobalNavBarBack />
                <SettingsContainer/>


            </div>
        );
    }
}


export default Settings;