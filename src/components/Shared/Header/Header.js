import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Header.css'
const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <Link className="navbar-brand" to="/">
          <img style={{ width: "150px" }} src="https://i.ibb.co/qmMRVgd/Urban-Riders.png" alt="" />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/destination">Destination</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              {loggedInUser.email ? <Link className="nav-link" to="">{loggedInUser.displayName}</Link> : <Link className="nav-link loginBtn text-white " to="/login">Login</Link>}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;