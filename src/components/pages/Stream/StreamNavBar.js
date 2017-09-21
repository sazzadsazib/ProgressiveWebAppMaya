import React, { Component } from 'react';
import Sidebar from "../../header/Sidebar";
import DesktopNav from "../../header/DesktopNav";
import More from "../../header/More";
import StreamNavMenu from "./StreamNavMenu";

class StreamNavBar extends Component{
    render(){
        return(
            <div>
            <nav className="z-top nav-extended fixed">
                <div className="nav-wrapper z-top">

                    <More/>
                    <DesktopNav/>
                    <Sidebar/>


                </div>
                <StreamNavMenu/>
            </nav>
            </div>
        );
    }
}


export default StreamNavBar;