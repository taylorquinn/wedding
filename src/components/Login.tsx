import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import profile from "../assets/images/camera.jpg";
import wave from "../assets/images/wave.png";
import { useAuth } from "./auth";
import "./Home.css";

export const Login = (): JSX.Element => {
  let navigate = useNavigate();

  let auth = useAuth();
  let from = "/";

  let [signinFailure, setSigninFailure] = React.useState<boolean | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let formData = new FormData(event.currentTarget);
    let username = formData.get("username") as string;

    if (username === undefined) {
      setSigninFailure(true);
    }

    auth.signin(username!, (success: boolean) => {
      //   // Send them back to the page they tried to visit when they were
      //   // redirected to the login page. Use { replace: true } so we don't create
      //   // another entry in the history stack for the login page.  This means that
      //   // when they get to the protected page and click the back button, they
      //   // won't end up back on the login page, which is also really nice for the
      //   // user experience.
      if (success) {
        navigate(from, { replace: true });
      } else {
        setSigninFailure(true);
      }
    });
  };

  return (
    <div className="login">
      <h1
        style={{
          margin: "20px",
          fontSize: "96px",
          fontFamily: "The Philadelphia Story",
          textShadow: "0px 0px 2px #c58054",
          fontWeight: 100,
        }}
      >
        welcome
      </h1>
      <div style={{ textAlign: "center" }}>
        <form onSubmit={handleSubmit}>
          <input
            name="username"
            type="text"
            className="username"
            placeholder="Please enter your full name"
          />
          <button className="button-74" type="submit">
            Submit!
          </button>
        </form>
      </div>

      {signinFailure && (
        <p>
          Sign in failed. Please try again! If there seems to be an error,
          please contact Taylor or Nick
        </p>
      )}
    </div>
  );
};
