import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Header from '../Shared/Header/Header';
import './SignIn.css'
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';
import { createUserWithEmailAndPassword, initializeLoginInFrameWorker } from '../Firebase/LoggedInManager';
import { useHistory, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretSquareRight } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faCaretSquareRight} />;
initializeLoginInFrameWorker()

const SignIn = () => {

  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const { register, handleSubmit, watch, errors } = useForm();
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const onSubmit = data => {
    createUserWithEmailAndPassword(data.name, data.email, data.password)
      .then(res => {
        setLoggedInUser(res)
        console.log(res);
        history.replace(from)
      })
  };

  return (
    <div>
      <Header />
      <div className="SignInPage">
        <div className="boxInside">
          <h4>Create an account</h4>
          <form className="pt-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <input type="text" name="name" className="form-control input" ref={register({ required: true })} placeholder="Name" />
              {errors.name && <span className="error">Name is required</span>}
            </div>
            <div className="form-group">
              <input type="email" name="email" className="form-control input pt-4" placeholder="Username or Email" ref={register({ required: true })} />
              {errors.email && <span className="error">Email is required</span>}
            </div>
            <div className="form-group pass-wrapper">
              <input type={passwordShown ? "text" : "password"} name="password" className="form-control input pt-4" placeholder="Password" ref={register({ required: true })} />
              {errors.password && <span className="error">Password is required</span>}
              <i onClick={togglePasswordVisiblity}>{eye}</i>
            </div>
            <div className="form-group pass-wrapper">
              <input type={passwordShown ? "text" : "password"} name="confirm_password" className="form-control input pt-4" placeholder="Confirm Password" ref={register({ validate: (value) => value === watch('password') })} />
              {errors.confirm_password && <span className="error">Passwords don't match.</span>}
              <i onClick={togglePasswordVisiblity}>{eye}</i>
            </div>
            <div className="form-group">
              <button style={{ backgroundColor: "#FF6E40" }} className="btn btn-block text-white mt-4" type="submit">Crate an account</button>
            </div>
            <h6 className="text-center pt-2">Already have an account?<Link style={{ color: "#FF6E40" }} to="/login" >Login</Link></h6>
          </form>
        </div>

      </div>
    </div>
  );
};

export default SignIn;