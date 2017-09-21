import React, { Component } from 'react';

class DesktopNav extends Component {
    render() {
        return (
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="/">ASK Maya Apa</a></li>
                <li><a href="/stream">Question Stream</a></li>
                <li><a href="/mystream">My Maya</a></li>
                <li><a href="/notifications">Notifications</a></li>
                <li><a href="/maya_plus">Subscribe to Plus</a></li>
                <li><a href="/freemium">Maya Free Premium<span className="new badge red" data-badge-caption="New!"></span></a></li>
            </ul>





        );
    }
}

export default DesktopNav;
