import React, {Component} from 'react';



class AnsDetailsContainer extends Component {
    render() {
        return (
            <div className="row mt-60">
                <div className="col s12 m12 l12 card-footer-margin">


                    <div className="card grey lighten-5 vam">
                        <div className="card-content">
                            <img className="float-left" src="assets/img/question-icon.png" width="30px"  alt="" />
                            <p className="time_layout">25th Jun 2017</p>
                        </div>
                        <div className="card-content black-text roboto-slab mt-5 bold">
                            <p>This is latest card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively.</p>
                        </div>

                        <div className="card-content border-top">
                            <img className="float-left" src="assets/img/plus.png" width="30px" alt=""/> <p className="time_layout">25th Jun 2017</p>
                        </div>
                        <div className="card-content black-text roboto-slab mt-5">
                            <p>This is latest ANSWER. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively.
                                This is latest ANSWER. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively.</p>
                            This is latest ANSWER. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.
                            This is latest ANSWER. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.
                            This is latest ANSWER. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.
                            This is latest ANSWER. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.
                            This is latest ANSWER. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.

                        </div>
                        <div className="card-action border-bottom">
                            <div className="card-footer2">
                                <a  className="card-footer-item" href=""><img id="imgToggle" src="assets/img/heart-nofill.png"   data-swap='assets/img/heart.png' data-src='assets/img/heart-nofill.png'width="25px" alt="" /> </a>
                                <a className="card-footer-item" href=""><img src="assets/img/comment.png" width="25px" alt=""/> </a>
                                <a className="card-footer-item" href=""><img src="assets/img/share.svg" width="25px" alt=""/> </a>
                            </div>
                        </div>
                        <div className="card horizontal z-depth-0 grey lighten-5 border-bottom">
                            <div className="card-image  padding-10px">
                                <img src="https://www.atomix.com.au/media/2015/06/atomix_user31.png" className="circle" alt=""/>
                            </div>
                            <div className="card-stacked">
                                <div className="card-content">
                                    <p>I am a very simple card. I am good at containing small bits of information.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card horizontal z-depth-0 grey lighten-5 border-bottom">
                            <div className="card-image  padding-10px">
                                <img src="https://www.atomix.com.au/media/2015/06/atomix_user31.png" className="circle" alt=""/>
                            </div>
                            <div className="card-stacked">
                                <div className="card-content">
                                    <p>I am a very simple card. I am good at containing small bits of information.</p>
                                </div>
                            </div>
                        </div>




                    </div>


                    <div className="bottom-fixed comment-custom amber lighten-5">
                        <div className="row"><input type="text" className="fix-comment-field" placeholder="Write your Comment" />
                            <button className="transparenet-button-right amber lighten-5 waves-effect waves-light" type="submit">
                                <img src="assets/img/send2.png" alt="send" className="ask_send_button" />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}


export default AnsDetailsContainer;
