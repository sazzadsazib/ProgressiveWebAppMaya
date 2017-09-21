import React, { Component } from 'react';

class StreamNavMenu extends Component{
    render(){
        return(
            <div className="nav-content">

                <div className="catagory">
                    <div className="catagory-item"><a href="#modal_catagory">Topic</a></div>
                    <div className="catagory-item"><a href="#modal_ans_type">TYPE</a></div>
                    <div className="catagory-item"><a href="#modal_date">Date</a></div>
                </div>

                <ul className="tabs tabs-transparent z-depth-3">
                    <li className="tab"><a className="active bold" href="#latest" >Latest</a></li>
                    <li className="tab"><a  href="#popular" className="bold">Popular</a></li>
                </ul>
            </div>
        );
    }
}


export default StreamNavMenu;