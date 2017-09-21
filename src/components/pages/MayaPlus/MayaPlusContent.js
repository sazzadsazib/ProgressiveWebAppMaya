import React, { Component } from 'react';

class MayaPlusContent extends Component {
    render() {
        return (
            <div className="row mt-60">
                <div className="col s12 m12 l12">
                    <div className="center padding-logo">
                        <img src="assets/img/mayapluslogo.png" width="200px" alt="mayaplus" />
                    </div>
                    <div className="center">
                        <p className="style-text-plus ofwhite">Maya apa Plus is for robi users <br/>You will get Expert advice in<br/> 10 Minutes</p>
                    </div>

                    <div className="center">
                        <button className="waves-effect waves-light btn seventywidth pink darken-3 mt-50px">Subscribe</button>
                        <button className="waves-effect waves-light btn seventywidth pink darken-3 ">History</button>
                    </div>

                    <div className="center">
                        <div className="box">
                            <p className="style-text-plus2 ofwhite">Powered by:</p>
                            <img src="assets/img/robi.png" width="50px" alt="robi"/>
                        </div>
                    </div>
                </div>



            </div>

        );
    }}

export default MayaPlusContent;


