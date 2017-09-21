        import React, { Component } from 'react';
        // import { NavLink } from 'react-router-dom';

        class Sidebar extends Component {
            render() {
                return (

                <div>
                    <ul id="slide-out" className="side-nav">
                    <li>
                        <div className="user-view">
                            <div className="background">
                                <img src="assets/img/bg-sidenav.png" alt="bg-sidenav" width="100%" />
                            </div>
                            <a href="/editinfo"><img className="circle center-obj" src="assets/img/sazib.jpg" alt="avatar" /></a>
                            <a href="/editinfo"><span className="white-text name center">Sazzad Sazib</span></a>
                            <a href="/editinfo"><span className="white-text email center">sazib66@gmail.com</span></a>
                        </div>
                    </li>
                    <li className="active">
                        <a  className="waves-effect" href="/">
                            <img className="icon-nav-class" src="assets/img/icon-askmaya.png" alt="askmaya" />
                            <span className="text-nav-className">Ask Maya Apa</span>
                        </a>
                    </li>

                    <li>
                        <a  className="waves-effect" href="/stream">
                            <img className="icon-nav-class" src="assets/img/icon-quesStream.png" alt ="qstream"/>
                            <span className="text-nav-className">Question Stream</span>
                        </a>
                    </li>

                    <li>
                        <a  className="waves-effect" href="/mystream">
                            <img className="icon-nav-class" src="assets/img/icon-mymaya.png"  alt ="mymaya"/>
                            <span className="text-nav-className">My Maya</span>
                        </a>
                    </li>
                    <li>
                        <a  className="waves-effect" href="/notifications">
                            <img className="icon-nav-class" src="assets/img/notifications.png"  alt ="notification"/>
                            <span className="text-nav-className">Notifications</span>
                        </a>
                    </li>
                    <li>
                        <a  className="waves-effect" href="/mayaplus">
                            <img className="icon-nav-class" src="assets/img/subscribeplus.png"  alt ="subscribe"/>
                            <span className="text-nav-className">Subscribe to Plus</span>
                        </a>
                    </li>
                    <li>
                        <a  className="waves-effect" href="/freemium">
                            <img className="icon-nav-class" src="assets/img/gift.png"  alt ="freemium"/>
                            <span className="text-nav-className">Maya Free Premium</span>
                            <span className="new badge pink darken-2" data-badge-caption="New!"></span>
                        </a>
                    </li>


                    <li>
                        <div className="divider">

                        </div>
                    </li>
                    <li>
                        <a  className="waves-effect mainhead" href="/blog">
                            <span className="text-nav-className"> Maya Blog </span>
                            <p className="mt-25 subheader-nav">Read Blogs From Maya.com.bd</p>
                        </a>
                    </li>
                    <li>
                        <a  className="waves-effect mainhead" href="/settings">
                            <span className="text-nav-className"> Settings </span>
                            <p className="mt-25 subheader-nav">Customize Options</p>
                        </a>
                    </li>
                    <li >
                        <a  className="waves-effect mainhead" href="/faq">
                            <span className="text-nav-className"> FAQ</span>
                            <p className="mt-25 subheader-nav">Frequently Ask Questions</p>
                        </a>
                    </li>
                    <li>
                        <a  className="waves-effect mainhead" href="/about">
                            <span className="text-nav-className"> About Us </span>
                            <p className="mt-25 subheader-nav">Read about Maya Apa</p>
                        </a>
                    </li>
                    <li>
                        <a  className="waves-effect mainhead" href="https://www.maya.com.bd/content/web/wp/language/en/disclaimer/">
                            <span className="text-nav-className"> Disclaimer </span>
                            <p className="mt-25 subheader-nav">Maya Apa Disclaimers</p>
                        </a>
                    </li>
                    <li>
                        <a  className="waves-effect mainhead" href="/contactus">
                            <span className="text-nav-className"> Contact Us </span>
                            <p className="mt-25 subheader-nav">Send Your Feedback</p>
                        </a>
                    </li>


                    </ul>
                    <a data-activates="slide-out" className="button-collapse waves-effect waves-light">
                        <i className="material-icons">menu</i>
                    </a>
                </div>
                );
            }
        }

        export default Sidebar;



