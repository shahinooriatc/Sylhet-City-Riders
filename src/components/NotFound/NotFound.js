import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="text-center ">
           <div className="">
           <h1>404</h1>
            <h4>Not Found</h4>
          <Link to="">  <button className="btn btn-danger">Back To Home</button> </Link> 
           </div>
        </div>
    );
};

export default NotFound;