import React, { Component } from 'react';
import StickeyTextFooter from "./StickeyTextFooter";

class Write extends Component{
    render(){
        return(
            <div id="write" className="col s12">
                <textarea className="texrarea_ask" placeholder="Ask Maya Apa...">

                </textarea>
                <br/>

                <StickeyTextFooter/>
            </div>
        );
    }
}


export default Write;