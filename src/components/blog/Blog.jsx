import React from 'react';
import Card from 'react-bootstrap/Card';
import { FaRegBookmark } from "react-icons/fa";

const Blog = (props) => {
    const {readPlus, blog} = props;
    const {title, name,authorImg,img,id,publishDate,readTime} = blog;


    return (
        <div>
            <Card className=''>
        <Card.Img className='img-fluid' variant="top" src={img} />
        <Card.Body>
          <div className='d-flex justify-content-between'>
            <div className='d-flex gap-3'>
                <img style={{height:'50px', width:'50px', borderRadius:'50px'}} src={authorImg} alt="" />
            <div>
                <h6 className='fw-bold m-0'>{name}</h6>
            <Card.Text>{publishDate}</Card.Text>
            </div>
            </div>
            <div>
            <p>{readTime} min read <button className='p-0 border-0'><FaRegBookmark></FaRegBookmark></button></p>
            </div>
          </div>
          <Card.Title className='fw-bold mt-3 fs-2 w-75'>{title}</Card.Title>
          <p>#beginners &nbsp; #programming</p>
          <button className='p-0 text-primary text-decoration-underline border-0' onClick={() => readPlus(blog)}>Mark as Read</button>
        </Card.Body>
      </Card>
        </div>
    );
};

export default Blog;