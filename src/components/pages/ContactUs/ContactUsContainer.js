import React, { Component } from 'react';
import ContactUsStickey from "./ContactUsStickey";

class ContactUsContainer extends Component {
    render() {
        return (
            <div className="col s12">
                <textarea className="texrarea_ask mt-35 n90vh" placeholder="Ask Maya Apa...">

                </textarea>
                <br/>

                <ContactUsStickey/>
            </div>


        );
    }}

export default ContactUsContainer;
