import React, {Component} from 'react';
import Preloader from "../../../global/Preloader";
import EditProfileContainer from "./EditProfileContainer";
import GlobalNavBarBack from "../../../global/GloablNavBarBack";



class EditProfile extends Component {
    render() {
        return (
            <div>
                <Preloader />
                <GlobalNavBarBack />
               <EditProfileContainer/>


            </div>
        );
    }
}


export default EditProfile;