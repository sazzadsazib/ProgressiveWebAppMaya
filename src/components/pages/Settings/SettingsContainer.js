import React, {Component} from 'react';



class SettingsContainer extends Component {
    render() {
        return (
            <div>
                <a href="/editinfo">
                    <div className="row mt-60">
                        <div className="col s12 m12 option-settings">
                            <p className="settings-header roboto-slab">Edit Profile</p>
                            <p className="settings-subheader roboto-slab">Edit Information About you</p>
                        </div>
                    </div>
                </a>
                <div className="divider">

                </div>

                <a href="#modal-language">
                    <div className="row mt-20">
                        <div className="col s12 m12 option-settings">
                            <p className="settings-header roboto-slab">Language</p>
                            <p className="settings-subheader roboto-slab">Change Your Language</p>
                            <img src="assets/img/bangladesh_flag.png" className="circle responsive-img float-right mt--60" width="40px" alt=""/>

                        </div>
                    </div>
                </a>


                <div className="divider"></div>

                <a href="https://goo.gl/tbNoSL" target="_blank" rel="noopener noreferrer">
                    <div className="row mt-20">
                    <div className="col s12 m12 option-settings">
                        <p className="settings-header roboto-slab">Rate This App</p>
                        <p className="settings-subheader roboto-slab">Rate Maya Apa Pwa App</p>

                    </div>
                    </div>
                </a>
                <div className="divider"></div>

            </div>


        );
    }
}


export default SettingsContainer;


