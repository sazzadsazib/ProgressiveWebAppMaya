import React, { Component } from 'react';
import MyStreamNavBar from "./MyStreamNavBar";
import MyStreamSaved from "./MyStreamSaved";
import MyStreamMyMaya from "./MyStreamMyMaya";
import MyPreloader from "../../global/MyPreloader";



class MyStream extends Component{
    render(){
        return(
            <div>
                <div className="container-fluid">
                    <MyPreloader/>
                   <MyStreamNavBar/>
                    <MyStreamMyMaya/>
                    <MyStreamSaved/>


                </div>
            </div>
        );
    }
}


export default MyStream;


