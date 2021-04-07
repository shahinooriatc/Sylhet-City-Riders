import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Shared/Header/Header';
import './SearchResult.css'
const SearchResult = () => {
    const [loggedInUser,setLoggedInUser]= useContext(UserContext)
    const [registerData,setRegisterData]=useState([loggedInUser])
    console.log(registerData);
    return (
        <div>
        <Header/>
        <div className="container">
       <hr/>
       <div className="row">
    
     {
         registerData.map(data => 
            
            <div className="col-md-4">
                
            <div className="progressBar">
            <ul  id="progress">
               
   <li><div className="node grey"></div><p>{data.data.text1}</p></li>
   <li><div className="divider grey"></div></li>
   <li><div className="node grey"></div><p>{data.data.text2}</p></li>
   
</ul>
<div className="card p-2">
<div className="d-flex justify-content-between pt-3">
         <div className="d-flex">
         <img style={{width:"40px",marginTop:"-5px"}} src={data.dataALL.img} alt=""/>
         <h6 className="pl-2">{data.dataALL.name}</h6>
         </div>
         <div className="d-flex">
             <img style={{width:"20px",height:"20px"}} src="https://i.ibb.co/BsxdFkD/peopleicon.png" alt=""/>
             <h6>1</h6>
         </div>
         <h5>$25</h5>
     </div>
</div>
    </div> 
   </div>
         )}
          <div className="col-md-8 pl-5">
           <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.700311876755!2d90.34510368559377!3d23.794582086880474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0e96fce29dd%3A0x6ccd9e51aba9e64d!2sMirpur-1%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1616301485724!5m2!1sen!2sbd" width="600" height="600"  loading="lazy"></iframe>
           </div>
       </div>
        </div>
       
    </div>
    );
};

export default SearchResult;