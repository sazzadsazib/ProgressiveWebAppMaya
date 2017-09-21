import React, { Component } from 'react';

class MyStreamStats extends Component{
    render(){
        return(
            <div>
                <ul className="flex-container">
                    <li className="flex-item sidebar roboto-slab"><span className="mystream-data">3456</span><br/>Total Question</li>
                    <li className="space"> &nbsp; </li>
                    <li className="flex-item sidebar roboto-slab"><span className="mystream-data">23</span><br/>Total Pending</li>
                </ul>
            </div>

        );
    }
}


export default MyStreamStats;