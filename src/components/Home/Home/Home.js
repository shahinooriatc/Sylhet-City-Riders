import React, { useState } from 'react';
import './Home.css'
import Header from '../../Shared/Header/Header';
import HomeDetails from '../HomeDetails/HomeDetails';
import Data from '../Data/Data';


const Home = () => {
    const [data,setData] = useState(Data)

  
    return (
        <div className="home">
            <Header/>
            <div className="container homeDetails">
            <div className="card-deck row">
         
        {
            data.map(data=> <HomeDetails data={data} key={data.id} ></HomeDetails>)
        }
            
            </div>
            </div>
        </div>
    );
};

export default Home;