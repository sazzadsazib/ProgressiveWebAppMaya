import React, { Component } from 'react';

class BlogCard extends Component {
    render() {
        return (
            <a href=""><div className="col s12 m6">
                <div className="card">
                    <p className="roboto-slab blog-header">সুস্থতা:ভিটামিন<br/>
                        <span className="sub-header-blog">Last Updated on 6th May 2017</span>
                    </p>

                    <img src="assets/img/bg1.jpg" width="100%" height="150px" alt="" />

                        <p className="text-blog">
                            সুস্থতা:ভিটামিন বিভিন্ন ধরনের ভিটামিন আমাদের খাবারের অত্যাবশ্যকীয় একটি অংশ। এগুলো ফলমূল, মাছ, শাকসবজি এবং মাংসের মত বিভিন্ন প্রাকৃতিক খাবারে পাওয়া যায়। মানুষের শরীর নিজে নিজে ভিটামিন সংশ্লেষণ (synthesize) করতে পারে না, তাই সুস্বাস্থ্যের জন্য বিভিন্ন খাবারের মাধ্যমে সঠিক পরিমাণে ভিটামিন গ্রহণ করাটা জরুরি...
                        </p>

                </div>
            </div>
            </a>
        );
    }}

export default BlogCard;
