import React from 'react';
import { useHistory } from 'react-router-dom';

const HomeDetails = ({ data }) => {
  const { img, id, name } = data;
  let history = useHistory();
  function handleCard(id) {
    history.push(`/${id}`);
  }
  return (
    <div className="col-md-3">
      <div onClick={() => handleCard(id)} className="card">
        <img className="card-img-top " src={img} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title text-center">{name}</h5>
        </div>
      </div>
    </div>
  );
};

export default HomeDetails;