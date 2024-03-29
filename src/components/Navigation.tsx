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
            {!auth.guest.announceOnly && (
              <div className="menu">
                <a
                  onClick={() => {
                    document.getElementById("schedule")!.scrollIntoView();
                  }}
                >
                  The Schedule
                </a>
                <a
                  onClick={() => {
                    document.getElementById("gettingThere")!.scrollIntoView();
                  }}
                >
                  Getting There
                </a>
                <a
                  onClick={() => {
                    document.getElementById("accomodations")!.scrollIntoView();
                  }}
                >
                  Accomodations
                </a>
                <a
                  onClick={() => {
                    document.getElementById("rsvp")!.scrollIntoView();
                  }}
                >
                  RSVP
                </a>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};
