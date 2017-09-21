import React, { Component } from 'react';
import More from "../header/More";
import DesktopNav from "../header/DesktopNav";
import Sidebar from "../header/Sidebar";

class GlobalNavBar extends Component{
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


export default GlobalNavBar;