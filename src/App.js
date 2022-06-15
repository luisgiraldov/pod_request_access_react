import React from 'react';
import logo from './logo.svg';
import './App.css';
import spotify from './assets/desktop/spotify.svg';
import apple from './assets/desktop/apple-podcast.svg';
import google from './assets/desktop/google-podcasts.svg';
import pocket from './assets/desktop/pocket-casts.svg';
import { emailValidator } from './helper_functions';

/***
  * `doNotRedirect` function callback
  * Avoid form to redirect, preventing the default behavior 
  * Call emailValidator function
***/

function App() {
  const [errorMessage, setErrorMessage] = React.useState("");
  const [successMessage, setSuccessMessage] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = emailValidator();
    if(isValid) {
      setErrorMessage("");
      setSuccessMessage("Success!");
    } else {
      setErrorMessage("Oops! please check your email");
      setSuccessMessage("");
    } 
  }

  return (
    <div className="main-container">
      <div className="img-bg">
      </div> 
      <header className="header">
        <img src={logo} alt="logo" />
      </header>
      <div className="main-content">
        <h1 className="title">
          <span>publish your podcasts</span><br />everywhere
        </h1>
        <p className="content">
          Upload your audio to Pod with a single click. 
          We’ll then distribute your podcast to Spotify, 
          Apple Podcasts, Google Podcasts, Pocket Casts and more!
        </p>
        <div className="podcasts-logos">
          <img src={spotify} alt="spotify-podcast-logo" />
          <img src={apple} alt="apple-podcast-logo" />
          <img src={google} alt="google-podcast-logo" />
          <img src={pocket} alt="pocket-logo" />
        </div>
        <form action='/' onSubmit={handleSubmit}>
          {/* <div className="request-access-container"> */}
            <input type="text" id="emailField" name="emailField" placeholder="Email address"/>
            {errorMessage && <div className="error"> {errorMessage} </div>}
            {successMessage && <div className="success"> {successMessage} </div>}
            <input type="submit" value="Request Access" id="emailBtnSubmit"></input>
          {/* </div> */}
        </form>
      </div>
    </div>
  );
}

export default App;
