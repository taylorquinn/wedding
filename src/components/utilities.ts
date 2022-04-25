import React from "react";
import room1 from "../assets/images/room-1.png";
import room2 from "../assets/images/room-2-rana.png";
import room3 from "../assets/images/room-3-toucan.png";
import room4 from "../assets/images/room-4.png";
import room5 from "../assets/images/room-5-lapa.png";
import room6 from "../assets/images/room-6-mono.png";
import apt1 from "../assets/images/apt1.png";
import apt2 from "../assets/images/apt2.png";

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

// export const house: Set<string> = new Set<string>([
//   "nick bohmann",
//   "taylor quinn",
//   "hugh c quinn",
//   "beth holloway",
//   "courtney quinn",
//   "jo dougherty",
//   "frances shapiro",
//   "will deuschle",
//   "erin kocis",
//   "seth goebel",
//   "lisa quinn",
//   "hugh quinn",
//   "ishita ganotra",
//   "kush pandit",
//   "matt marchiony",
//   "boston burke",
//   "john bradford",
//   "john daguerre-bradford",
//   "bella ferraro",
//   "riley lovett",
//   "brooke gerlach",
//   "cara bohmann",
//   "tj holt",
// ]);
// export const guest: Set<string> = new Set<string>([
//   "rene miller",
//   "carol miller",
//   "deby lemire",
//   "mady bucher",
//   "sahil doshi",
//   "resa"
// ]);

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
