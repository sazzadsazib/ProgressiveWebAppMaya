import React, { Component } from 'react';
import StreamNavBar from "./StreamNavBar";
import StreamLatest from "./StreamLatest";
import StreamPopular from "./StreamPopular";
import Preloader from "../../global/Preloader";
import ModalContainer from "../../modals/ModalContainer";


class Stream extends Component{
    render(){
        return(
            <div>
                <ModalContainer/>
                <Preloader/>
                <StreamNavBar/>
                <StreamLatest/>
                <StreamPopular/>
            </div>
        );
    }
}


export default Stream;