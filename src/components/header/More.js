import React, { Component } from 'react';

class More extends Component {
    render() {
        return (
            <div>
            <a  className="brand-logo left"><img className="nav-logo" src="assets/img/nav_logo.png" alt ="Maya Apa" />
                <span className="nav_title">Ask</span>
            </a>
            <ul id="more" className ="dropdown-content">
            <li><a className ="maya-color">Invite</a></li>
            <li><a href="#modal_share" className="maya-color">Share</a></li>
            </ul>
            <a className="btn btn-flat dropdown-button nav-more pink darken-2 waves-effect waves-light" href="#!" data-activates="more"><img src="assets/img/more.png" width="5px;" alt="more"/></a>
            </div>

    );
    }
}

export default More;
