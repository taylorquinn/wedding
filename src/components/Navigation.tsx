import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";

export const Navigation = (): JSX.Element => {
  let auth = useAuth();

  return (
    <>
      {auth.guest && (
        <>
          <div className="nav-background"></div>
          <div className="navigation">
            {/* <a href="#header">t♥️n</a> */}

            <div className="menu">
              <a
                onClick={() => {
                  document.getElementById("schedule")!.scrollIntoView();
                }}
              >
                The Schedule
              </a>
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
