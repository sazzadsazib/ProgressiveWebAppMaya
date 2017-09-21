import React, {Component} from 'react';



class EditProfileContainer extends Component {
    render() {
        return (
            <div>
                <div className="row mt-60">
                    <div className="col s12 m12 option-settings">
                        <p className=" mt-15 settings-subheader roboto-slab">Enter Your Name:
                            <input defaultValue="Sazib" id="first_name2" type="text" />
                        </p>
                    </div>
                </div>
                <div className="divider">
                </div>
                <div className="row mt-20">
                    <div className="col s12 m12 option-settings">
                        <p className=" mt-15 settings-subheader roboto-slab">Date Of Birth:
                            <input type="date" className="datepicker" defaultValue="23 August, 2017" />
                        </p>
                    </div>
                </div>
                <div className="divider">

                </div>
                <div className="row mt-20">
                    <div className="col s12 m12 option-settings">
                        <p className=" mt-15 settings-subheader roboto-slab">Phone No:
                            <input type="text" className="maya-text nb" defaultValue="+880 167 471 6980" disabled="" />
                        </p>
                    </div>
                </div>
                <div className="divider">

                </div>
                <div className="row mt-20">
                    <div className="col s12 m12 option-settings">
                        <div className=" mt-15 settings-subheader roboto-slab">Gender:
                            <p>
                                <input name="group1" type="radio" id="test1" defaultChecked/>
                                <label htmlFor="test1">Male</label>
                            </p>
                            <p>
                                <input name="group1" type="radio" id="test2" />
                                <label htmlFor="test2" >Female</label>
                            </p>
                        </div>
                    </div>
                </div><br/>
                <div className="divider">

                </div>
                <div className="row mt-20">
                    <div className="col s12 m12 option-settings">
                        <div className=" mt-15 settings-subheader roboto-slab">Marital Status:
                            <p>
                                <input name="group2" type="radio" id="test3" defaultChecked/>
                                <label htmlFor="test3">Married</label>
                            </p>
                            <p>
                                <input name="group2" type="radio" id="test4" />
                                <label htmlFor="test4">Single</label>
                            </p>
                        </div>
                    </div>
                </div><br/><br/>
                <div className="catagory3">
                    <div className="catagory-item3">
                        <a href="/settings" className="btn btn-md pink darken-2">Save Changes</a>
                    </div>
                </div>
            </div>
        );
    }
}


export default EditProfileContainer;