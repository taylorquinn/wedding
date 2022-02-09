import React from "react";
import room1 from "../assets/images/room-1.png";
import room2 from "../assets/images/room-2-rana.png";
import room3 from "../assets/images/room-3-toucan.png";
import room4 from "../assets/images/room-4.png";
import room5 from "../assets/images/room-5-lapa.png";
import room6 from "../assets/images/room-6-mono.png";
import apt1 from "../assets/images/apt1.png";
import apt2 from "../assets/images/apt2.png";

export type guestInfo = {
  guest: string;
  partner?: string;
  room?: roomInfo;
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

export const house: Set<string> = new Set<string>([
  "nick bohmann",
  "taylor quinn",
  "hugh c quinn",
  "beth holloway",
  "courtney quinn",
  "jo dougherty",
  "frances shapiro",
  "will deuschle",
  "erin kocis",
  "seth goebel",
  "lisa quinn",
  "hugh quinn",
  "ishita ganotra",
  "kush pandit",
  "matt marchiony",
  "boston burke",
  "john bradford",
  "john daguerre-bradford",
  "bella ferraro",
  "riley lovett",
  "brooke gerlach",
  "cara bohmann",
  "tj holt",
]);
export const guest: Set<string> = new Set<string>(["rene"]);

export const getGuestInfo = (guestName: string): guestInfo => {
  switch (guestName) {
    case "nick bohmann" && "taylor quinn":
      return {
        guest: "Taylor",
        partner: "Nick",
        room: {
          roomName: "Room 1 - Tranquilidad",
          roomImage: room1,
        },
      };
    case "hugh c quinn" && "beth holloway":
      return {
        guest: "Hugh",
        partner: "Beth",
        room: {
          roomName: "Room 2 - Tranquilidad",
          roomImage: room1,
        },
      };
    case "courtney quinn":
    case "jo dougherty":
    case "erin kocis" && "seth goebel":
      return {
        guest: "Erin",
        partner: "Seth",
        room: {
          roomName: "Room 3 - Toucan",
          roommate: "Frances and Will",
          roomImage: room3,
        },
      };
    case "lisa quinn" && "hugh quinn":
      return {
        guest: "Mom",
        partner: "Dad",
        room: {
          roomName: "Room 4 - Brisas del Mar",
          roomImage: room4,
        },
      };
    case "frances shapiro" && "will deuschle":
      return {
        guest: "Frances",
        partner: "Will",
      };
    case "rene":
      return {
        guest: "Aunt Rene",
      };

    default:
      return { guest: "Family" };
  }
};
