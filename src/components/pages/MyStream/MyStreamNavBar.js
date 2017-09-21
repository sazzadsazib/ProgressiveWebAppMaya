import React, { Component } from 'react';
import Sidebar from "../../header/Sidebar";
import DesktopNav from "../../header/DesktopNav";
import More from "../../header/More";
import MyStreamNavMenu from "./MyStreamNavMenu";

class MyStreamNavBar extends Component{
    render(){
        return(
            <div>
                <nav className="z-top nav-extended fixed">
                    <div className="nav-wrapper">


                        <More/>
                        <DesktopNav/>
                        <Sidebar/>

                    </div>
                    <MyStreamNavMenu/>
                </nav>
            </div>
        );
    }
}


export default MyStreamNavBar;