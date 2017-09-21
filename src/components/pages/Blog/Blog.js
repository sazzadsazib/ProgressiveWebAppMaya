import React, {Component} from 'react';
import Preloader from "../../global/Preloader";
import ModalInvite from "../../modals/ModalInvite";
import GlobalNavBar from "../../global/GlobalNavBar";
import BlogContainer from "./BlogContainer";


class Blog extends Component {
    render() {
        return (
            <div className="notification-bg">
                <ModalInvite />
                <Preloader />
                <GlobalNavBar />
                <BlogContainer />


            </div>
        );
    }
}


export default Blog;