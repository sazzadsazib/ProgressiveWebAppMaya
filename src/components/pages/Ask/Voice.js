import React, { Component } from 'react';

import StrickeyVoice from "./StickeyVoice";

class Voice extends Component{
    render(){
        return(
            <div id="voice" className="col s12">
                <div className="voice-button-css">
                    <button className="transparenet-button-center waves-effect waves-light white ">
                        <img  src="assets/img/voice_button.png" alt="voice" width="100px"/>
                    </button>
                </div>
                <div className="voice-button-css-info">
                    <img  src="assets/img/info.png" alt="info" width="250px"/>
                </div>


                <StrickeyVoice />
            </div>
        );
    }
}


export default Voice;