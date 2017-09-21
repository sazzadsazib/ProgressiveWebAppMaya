import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import Ask from "./components/pages/Ask/Ask";
import Stream from "./components/pages/Stream/Stream";
import MyStream from "./components/pages/MyStream/MyStream";
import Notifications from "./components/pages/Notifications/Notifications";
import MayaPlus from "./components/pages/MayaPlus/MayaPlus";
import Freemium from "./components/pages/Freemium/Freemium";
import Promo from "./components/pages/Freemium/Promo/Promo";
import Blog from "./components/pages/Blog/Blog";
import Settings from "./components/pages/Settings/Settings";
import EditProfile from "./components/pages/Settings/EditProfile/EditProfile";
import Faq from "./components/pages/FAQ/Faq";
import AboutUs from "./components/pages/AboutUs/AboutUs";
import ContactUs from "./components/pages/ContactUs/ContactUs";
import AnsDetails from "./components/pages/AnsDetails/AnsDetails";



const Routes = (
    <BrowserRouter>
        <div>
            <Route exact path='/' component={ Ask }/>
            <Route path='/stream' component={ Stream }/>
            <Route path='/mystream' component={ MyStream }/>
            <Route path='/notifications' component={ Notifications }/>
            <Route path='/mayaplus' component={ MayaPlus }/>
            <Route path='/freemium' component={ Freemium }/>
            <Route path='/promo' component={ Promo }/>
            <Route path='/blog' component={ Blog }/>
            <Route path='/settings' component={ Settings }/>
            <Route path='/editinfo' component={ EditProfile }/>
            <Route path='/faq' component={ Faq }/>
            <Route path='/about' component={ AboutUs }/>
            <Route path='/contactus' component={ ContactUs }/>
            <Route path='/ansdetails' component={ AnsDetails }/>







        </div>
    </BrowserRouter>
);

ReactDOM.render(
    Routes,
    document.getElementById('root')
);

registerServiceWorker();
