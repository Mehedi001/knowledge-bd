import React, { useEffect, useState } from 'react';
import './Blogsbody.css'
const Blogsbody = () => {

    const [blogs, setBlogs] = useState([])

    useEffect(()=> {
        fetch ('mehedidata.json')
        .then (res => res.json())
        .then (data => setBlogs(data))
    },[]);

console.log (blogs)

    return (
        <div>
          <div>
            {
                blogs.map(blog =>

                    <div key={blog.id}>
                        <h2>{blog.title}</h2>
                    </div>


                    )
            }
          </div>
          <div>

          </div>
        </div>
    );
};

export default Blogsbody;