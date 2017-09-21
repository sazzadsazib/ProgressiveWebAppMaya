import React, { Component } from 'react';

class StrickeyVoice extends Component{
    render(){
        return(

            <div className="stickey stickey-div">
                <a className="transparenet-button-left pink darken-2 tooltipped"  data-position="top" data-delay="50" data-tooltip="Expected wait time 15 minutes"><img src="assets/img/15_grey.png" alt="eta" className="ask_attach_button"/></a>
                <button className="transparenet-button-right pink darken-2 waves-effect waves-light" type="submit">
                    <img src="assets/img/send.png" alt="send" className="ask_send_button" />
                </button>
            </div>
        );
    }
}


export default StrickeyVoice;