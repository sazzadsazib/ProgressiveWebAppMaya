import React, { Component } from 'react';

class MyPreloader extends Component {
    render() {
        return (
            <div id="preloader">
                <img className="preloader-center preloader-custom-mymaya" src="assets/img/loader.svg" alt ="loading.." width="50px" />
            </div>
        );
    }}

export default MyPreloader;
