import React, {Component} from 'react';



class AboutUsContainer extends Component {
    render() {
        return (
            <div className="row mt-10">
                <div className="col s12 m12">
                    <div className="card">
                        <ul className="" data-collapsible="accordion">

                            <li className="active">
                                <div className="collapsible-header roboto-slab black50 center">
                                    <img className="mt-15" src="assets/img/aboutusicon.png" width="100px" alt=""/></div>
                                <div className="collapsible-body roboto-slab black50 active display-block" ><span>
              	<b>Maya Apa</b> is re-inventing the way people in developing countries access specialist advice. Maya Apa is a knowledge sharing/messaging platform available on Android, Web, and WAP.
              	<br/>
              	Our intelligent technology connects users to expert advice, allowing anonymity. We’ve been helping anonymous user questions get relevant expert advice since 2011.
              	<br/>
              	We currently services 1500+ questions a day, encompassing a wide range of topics, primarily; Public Health, Psycho-social and Legal. With a MoM growth rate of 10%+ we’re constantly on the edge of chaos and looking to grow further.
              	<br/>
              	In countries like Bangladesh, where there are many barriers to accessing reliable advice (particularly for women), our service is easy-to-use and very user friendly. Both men and women can ask questions in English, Bangla, Banglish and or Voice. Questions are then routed to a vetted network of experts (doctors, therapists etc.) through a real-time, uber-like backend.
              	<br/>
              	To start getting expert advice, you can also ask from our web: <a href="http://maya.com.bd">Maya Apa</a>
              </span>
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        );
    }
}


export default AboutUsContainer;