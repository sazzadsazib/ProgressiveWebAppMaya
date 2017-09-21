import React, { Component } from 'react';
import MyStreamNoticeBoard from "./MyStreamNoticeBoard";
import MyStreamStats from "./MyStreamStats";

class MyStreamNavMenu extends Component{
    render(){
        return(
            <div className="nav-content">
                <MyStreamStats/>
                <MyStreamNoticeBoard/>

                <ul className="tabs tabs-transparent z-depth-3">
                    <li className="tab"><a className="active bold" href="#mymaya" >My Maya</a></li>
                    <li className="tab"><a  href="#savedques" className="bold">Saved Question</a></li>

                </ul>
            </div>
        );
    }
}


export default MyStreamNavMenu;