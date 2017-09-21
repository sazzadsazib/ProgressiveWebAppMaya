import React, { Component } from 'react';
import ModalCatagory from "./ModalCatagory";
import ModalInvite from "./ModalInvite";
import ModalAnsType from "./ModalAnsType";


class ModalContainer extends Component{
    render(){
        return(
            <div>
                {/*<ModalDate/>*/}
                <ModalCatagory/>
                <ModalInvite/>
                <ModalAnsType/>

            </div>
        );
    }
}


export default ModalContainer;