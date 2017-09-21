import React, { Component } from 'react';

class Preloader extends Component {
    render() {
        return (
            <div id="preloader">
                <img className="preloader-center" src="assets/img/loader.svg" alt ="loading.." width="50px" />
            </div>
        );
    }}

export default Preloader;
