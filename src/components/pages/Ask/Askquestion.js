import React, {Component} from 'react';
import Voice from "./Voice";
import Write from "./Write";
import Sidebar from "../../header/Sidebar";
import NavBar from "./NavBar";
import Preloader from "../../global/Preloader";
import ModalInvite from "../../modals/ModalInvite";

class askquestion extends Component {
    render() {
        return (
          <div>
              <ModalInvite/>
              <Preloader/>
                <Sidebar />
                <div className="main-panel">
                    <NavBar />
                    <Write />
                    <Voice />
                </div>
            </div>
        );
    }
}

export default askquestion;