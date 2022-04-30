import React from "react";
import room1 from "../assets/images/room-1.jpg";
import room2 from "../assets/images/room-2-rana.jpg";
import room3 from "../assets/images/room-3-toucan.jpg";
import room4 from "../assets/images/room-4.jpg";
import room5 from "../assets/images/room-5-lapa.jpg";
import room6 from "../assets/images/room-6-mono.jpg";
import apt1 from "../assets/images/room-1.jpg";
import apt2 from "../assets/images/room-2.jpg";

export type Guest = {
  name: string;
  partner?: string;
  room?: roomInfo;
  announceOnly?: boolean;
};
export type roomInfo = {
  roommate?: string;
  roomName: string;
  roomImage: string;
};

export const getDaysRemaining = (): number => {
  const date1 = new Date("3/6/2023");
  const date2 = new Date(Date.now());
  const Difference_In_Time = date1.getTime() - date2.getTime();

  // To calculate the no. of days between two dates
  return Math.trunc(Difference_In_Time / (1000 * 3600 * 24));
};

export const getGuestInfo = (guestName: string): Guest | null => {
  switch (guestName) {
    case "nick bohmann":
    case "taylor quinn":
      return {
        name: "Taylor",
        partner: "Nick",
        room: {
          roomName: "Room 1 - Tranquilidad",
          roomImage: room1,
        },
      };
    case "hugh c quinn" || "beth holloway":
      return {
        name: "Hugh",
        partner: "Beth",
        room: {
          roomName: "Room 2 - Rana",
          roomImage: room2,
          roommate: "Courtney and Jo",
        },
      };
    case "courtney quinn":
      return {
        name: "Courtney",
        room: {
          roomName: "Room 2 - Rana",
          roomImage: room2,
          roommate: "Hugh, Beth and Jo",
        },
      };
    case "jo dougherty":
      return {
        name: "Jo",
        room: {
          roomName: "Room 2 - Rana",
          roomImage: room2,
          roommate: "Hugh, Beth and Courtney",
        },
      };
    case "erin kocis" || "seth goebel":
      return {
        name: "Erin",
        partner: "Seth",
        room: {
          roomName: "Room 3 - Toucan",
          roommate: "Frances and Will",
          roomImage: room3,
        },
      };
    case "frances shapiro" || "will deuschle":
      return {
        name: "Frances",
        partner: "Will",
        room: {
          roomName: "Room 3 - Toucan",
          roomImage: room3,
          roommate: "Erin and Seth",
        },
      };
    case "lisa quinn":
    case "hugh quinn":
      return {
        name: "Mom",
        partner: "Dad",
        room: {
          roomName: "Room 4 - Brisas del Mar",
          roomImage: room4,
        },
      };
    case "rene miller":
      return {
        name: "Aunt Rene",
      };
    case "carol miller":
      return {
        name: "Grandma",
        partner: "Grandpa",
      };
    case "mady bucher":
    case "sahil doshi":
      return {
        name: "Mady",
        partner: "Sahil",
      };
    case "deby lemire":
    case "dave lemire":
      return {
        name: "Aunt Deby",
        partner: "Uncle Dave",
      };
    default:
      return null;
  }
};
