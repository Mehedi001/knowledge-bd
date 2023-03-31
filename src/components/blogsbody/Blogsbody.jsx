import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import Blog from '../blog/Blog';
import './Blogsbody.css'
const Blogsbody = () => {

    const [blogs, setBlogs] = useState([]);
    const [readTime, setReadtime] = useState(0);
    const [bookmarks, setBookmark] = useState([]);

    useEffect(() => {
        fetch('mehedidata.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    function readPlus(blog) {
        setReadtime(readTime + blog.readTime)
    }
    // function addBookmarks(blog) {
    //     const newBookmark = [...bookmarks, blog.title]
    //     setBookmark(newBookmark);
    //     console.log (newBookmark)
    // }

    function addBookmarks(blog) {
        if (bookmarks.includes(blog.title) !== true) {
            const newBookmark = [...bookmarks, blog.title]
            setBookmark(newBookmark);
            toast.success('Bookmark Successfully Added',{
                position:'top-center'
            })
        }
        else {
            toast.error('You Have Already Bookmarked This Blog', {
                position:'bottom-center'
            })
        }
    }


    return (
        <div className='blog-container'>
            <div className='blog-left-side'>
                {
                    blogs.map(blog =>
                        <Blog
                            key={blog.id}
                            blog={blog}
                            readPlus={readPlus}
                            addBookmarks={addBookmarks}
                        ></Blog>

                    )
                }
            </div>
            <div className='blog-right-side'>
                <h4 style={{ backgroundColor: 'rgba(96, 71, 236, 0.1)' }} className='rounded-2 p-1 p-md-4 border border-primary text-primary text-center'>Spent time on read: {readTime} min</h4>
                <div className='bg-light rounded-1 p-3 mt-4'>
                    <h4 className='mt-2 fw-bold'>Bookmarked Blogs: {bookmarks.length}</h4>
                    <div>
                        {
                            bookmarks.map((bookmark, i) => <h6
                                key={i}
                                className='bg-white rounded-1 px-3 py-3' >{bookmark}</h6>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogsbody;