import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import profile from "../assets/images/camera.jpg";
import wave from "../assets/images/wave.png";
import { useAuth } from "./auth";
import "./Home.css";

export const Login = (): JSX.Element => {
  const input: React.Ref<HTMLInputElement> = React.useRef(null);

  let navigate = useNavigate();
  // interface stateType {
  //   state: { from: { pathname: string } };
  // }
  // let location = useLocation() as stateType;
  let auth = useAuth();
  // let from = location.state?.from?.pathname || "/";
  let from = window.location.hash || "/";
  console.log(from);

  let [signinFailure, setSigninFailure] = React.useState<boolean | null>(null);

  const handleSubmit = (
    event:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.KeyboardEvent<HTMLInputElement>
  ) => {
    //   event.preventDefault();
    //  event.stopPropagation();
    console.log("HANDLE SUBMIT");

    // let formData = new FormData(event.currentTarget);
    let username = input.current?.value;
    // global.console.log(username);
    console.log(username);
    //   console.log(from);
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
        {/*  <form onSubmit={handleSubmit}>*/}
        <input
          name="username"
          type="text"
          className="username"
          ref={input}
          placeholder="Please enter your full name"
          onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
            if (event.code === "Enter") {
              handleSubmit(event);
            }
          }}
        />
        <button className="button-74" type="button" onClick={handleSubmit}>
          Submit!
        </button>
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
