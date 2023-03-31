import React from 'react';
import './Blogpage.css'


const Blogpage = () => {
    return (
        <div className='bg-secondary p-1 p-md-5 text-light mt-5'>
            <h2 className='text-center mb-4 text-decoration-underline text-warning'>Question & Answer</h2>
            <div className='footer p-md-5 p-3'>
            <div className='w-100 w-md-50 '>
            <h3>Props vs state</h3>
            <p>
                - Props are read-only.<br/>
                - Props are immutable. <br/>
                - Props allow you to pass data from one component to other components as an argument. </p>
            <h3>How does useState work?</h3>
            <p>The useState() hook allows you to create, track and update a state in functional components</p>
            </div>
            <div className='w-100 ms-0 ms-md-3 w-md-50'>
            <h3>Purpose of useEffect other than fetching data.</h3>
            <p>The useEffect in react js allows to perform side effects in components. If we need to perform a side effect, it should strictly be done after our component renders.</p> <br /> <br />
            <h3>How Does React work?</h3>
            <p>One of the most widely used JavaScript libraries for creating mobile and online applications is ReactJS. Facebook created</p>
            </div>
            </div>
        </div>
    );
};

export default Blogpage;