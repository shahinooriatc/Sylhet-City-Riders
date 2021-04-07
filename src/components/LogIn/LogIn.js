
import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import './LogIn.css'
import { UserContext } from '../../App';
import { useForm } from "react-hook-form";
import { googleBtn, fbBtn, initializeLoginInFrameWorker, signInWithEmailAndPassword } from '../Firebase/LoggedInManager';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretSquareRight } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faCaretSquareRight} />;

const LogIn = () => {

  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  initializeLoginInFrameWorker()

  //Google Login......
  const googleSignIn = () => {
    googleBtn()
      .then(result => {
         setLoggedInUser(result);
        history.replace(from)
      })
  }

  //Facebook Login.........
  const fbSignIn = () => {
    fbBtn()
      .then(result => {
        setLoggedInUser(result)
        history.replace(from)
      })
  }

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const { register, handleSubmit, watch, errors } = useForm();


  const onSubmit = data => {
    signInWithEmailAndPassword(data.email, data.password)
      .then(res => {
        setLoggedInUser(res)
        history.replace(from);
      })
  };
  return (
    <div>
      <Header />
      <div className="logInPage">
        <div className="boxInside">
          <h4>Login</h4>
          <form className="pt-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <input type="email" name="email" className="form-control input" placeholder="Email" ref={register({ required: true })} />
              {errors.email && <span className="error">Email is required</span>}
            </div>
            <div className="form-group pass-wrapper">
              <input type={passwordShown ? "text" : "password"} name="password" className="form-control input mt-4" placeholder="Password" ref={register({ required: true })} />
              {errors.password && <span className="error">Password is required</span>}
              <i onClick={togglePasswordVisiblity}>{eye}</i>
            </div>
            <div className="d-flex justify-content-between ">
              <div>
                <input type="checkbox" id="RememberPassword" name="RememberPassword" value="RememberPassword" />
                <label style={{ paddingLeft: "5px", fontWeight: "600" }} htmlFor="RememberPassword">Remember Me</label>
              </div>
              <h6>Forgot Password</h6>
            </div>
            <button style={{ backgroundColor: "#FF6E40" }} className="btn btn-block text-white mt-4" type='submit'>Login</button>
            <h6 className="text-center pt-2">Don't have an account?<Link style={{ color: "#FF6E40" }} to="/signIn" >Create an account</Link></h6>
          </form>
        </div>
        <div className="text-center pt-3">
          <button onClick={googleSignIn} className="googleBtn">
            <img src="https://freepngimg.com/thumb/google/66274-school-google-pearl-button-up-sign-middle.png" alt="" />
                    Continue with Google</button>
        </div>
        <br />
        <div className="text-center pt-3">
          <button onClick={fbSignIn} class="fbBtn">
            <img src="https://www.teahub.io/photos/full/11-115962_facebook-logo-png-transparent-background-facebook-png.png" alt="" />
                    Continue with FaceBook</button>
        </div>

      </div>
    </div>
  );
};

export default LogIn;