import React, {Component} from 'react';
import BlogCard from "./BlogCard";



class BlogContainer extends Component {
    render() {
        return (

            <div className="row mt-70">
                <div className="mt-10 maya-bg"> &nbsp;</div>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>

                <div className="fill-notification"></div>

            </div>

        );
    }
}


export default BlogContainer;