import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";

export const Navigation = (): JSX.Element => {
  let auth = useAuth();

  return (
    <>
      {auth.user && (
        <>
          <div className="nav-background"></div>
          <div className="navigation">
            <NavLink className="nav-link" to="/wedding/">
              t♥️n
            </NavLink>

            <div className="menu">
              <a href="#schedule">The Schedule</a>
              <a href="#gettingThere">Getting There</a>
              <a href="#accomodations">Accomodations</a>
              <a href="#RSVP">RSVP</a>
            </div>
          </div>
        </>
      )}
    </>
  );
};
