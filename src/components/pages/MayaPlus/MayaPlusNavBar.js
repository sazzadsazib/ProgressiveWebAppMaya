import React, { Component } from 'react';
import Sidebar from "../../header/Sidebar";
import DesktopNav from "../../header/DesktopNav";
import More from "../../header/More";

class MayaPlusNavBar extends Component{
    render(){
        return(
            <div>
                <nav className="z-top nav-extended fixed">
                    <div className="nav-wrapper z-top">

                        <More/>
                        <DesktopNav/>
                        <Sidebar/>

                    </div>
                </nav>
            </div>
        );
    }
}


export default MayaPlusNavBar;