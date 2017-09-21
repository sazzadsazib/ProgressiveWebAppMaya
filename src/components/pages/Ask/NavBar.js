import React, { Component } from 'react';
import Sidebar from "../../header/Sidebar";
import DesktopNav from "../../header/DesktopNav";
import More from "../../header/More";

class NavBar extends Component {
    render() {
        return (
            <nav className="z-top nav-extended ">
                <div className="nav-wrapper">
                   <More/>
                    <DesktopNav/>
                    <Sidebar />
                </div>
                <div className="nav-content">
                    <ul className="tabs tabs-transparent">
                        <li className="tab"><a className="active bold" href="#write">WRITE</a></li>
                        <li className="tab"><a  href="#voice" className="bold">VOICE</a></li>

                    </ul>
                </div>

            </nav>
        );
    }
}

export default NavBar;
