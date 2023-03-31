import React, { useEffect, useState } from 'react';
import Blog from '../blog/Blog';
import './Blogsbody.css'
const Blogsbody = () => {

    const [blogs, setBlogs] = useState([]);
    const [readTime, setReadtime] = useState(0);

    useEffect(()=> {
        fetch ('mehedidata.json')
        .then (res => res.json())
        .then (data => setBlogs(data))
    },[]);

    function readPlus(blog){
        setReadtime (readTime + blog.readTime)
    }

    return (
        <div className='col-md-12 d-flex gap-3'>
          <div className='col-md-9'>
            {
                blogs.map(blog =>
                        <Blog
                        key={blog.id}
                        blog = {blog}
                        readPlus = {readPlus}
                        ></Blog>
                   
                    )
            }
          </div>
          <div className='col-md-3 border'>
            <h4 style={{backgroundColor:'rgba(96, 71, 236, 0.1)'}} className='rounded-2 p-4 border border-primary text-primary text-center'>Spent time on read: {readTime} min</h4>
            <div className='bg-light rounded-1 p-3 mt-4'>
                <h4 className='mt-2 fw-bold'>Bookmarked Blogs: {}</h4>
                <div>
                    <h6 className='bg-white rounded-1 px-3 py-3' >What yosdf fffff fffffur name</h6>
                </div>
            </div>
          </div>
        </div>
    );
};

export default Blogsbody;