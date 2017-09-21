import React, { Component } from 'react';

class NotificationsCard extends Component {
    render() {
    return (
        <div className="col s12 m6  mt--10">
            <div className="card horizontal">
                <div className="card-image">
                    <img src="assets/img/notifications-tab-icon.png" width="60px" alt="" />
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <p className="bold">A Question is Answered</p>
                        <p>A Question that you are interested in has been answered</p>
                        <p className="time-notifications">4 Minutes Ago</p>
                    </div>
                </div>
            </div>
        </div>


    );
}}

export default NotificationsCard;
