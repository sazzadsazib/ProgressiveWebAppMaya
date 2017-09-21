import React, { Component } from 'react';
import More from "../header/More";
import DesktopNav from "../header/DesktopNav";

class GlobalNavBarBack extends Component{
    render(){
        return(
            <div>
                <nav className=" z-top nav-extended fixed">
                    <div className="nav-wrapper">
                       <More/>
                        <DesktopNav/>

                        <button className="back-noheader3 waves-effect waves-light pink darken-2 nb" >
                            <i className="fa fa-angle-left fa-3x"></i>
                        </button>

                    </div>

                </nav>
            </div>
        );
    }
}


export default GlobalNavBarBack;