import React from "react";
import room1 from "../assets/images/room-1.jpg";
import room2 from "../assets/images/room-2-rana.jpg";
import room3 from "../assets/images/room-3-toucan.jpg";
import room4 from "../assets/images/room-4.jpg";
import room5 from "../assets/images/room-5-lapa.jpg";
import room6 from "../assets/images/room-6-mono.jpg";
import apt1 from "../assets/images/room-7.jpg";
import apt2 from "../assets/images/room-8.jpg";

export type Guest = {
  name: string;
  partner?: string;
  room?: roomInfo;
  announceOnly?: boolean;
  isFamily?: boolean;
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
    case "hugh c quinn":
    case "beth holloway":
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
    case "erin kocis":
    case "seth goebel":
      return {
        name: "Erin",
        partner: "Seth",
        room: {
          roomName: "Room 3 - Toucan",
          roommate: "Frances and Will",
          roomImage: room3,
        },
      };
    case "frances shapiro":
    case "will deuschle":
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
    case "john daguerre-bradford":
    case "bella ferraro":
      return {
        name: "John",
        partner: "Bella",
        room: {
          roomName: "Room 5 - Lapa Roja",
          roomImage: room5,
          roommate: "Riley and Brooke",
        },
      };
    case "riley lovett":
    case "brooke gerlach":
      return {
        name: "Riley",
        partner: "Brooke",
        room: {
          roomName: "Room 5 - Lapa Roja",
          roomImage: room5,
          roommate: "John and Bella",
        },
      };
    case "ishita ganotra":
    case "kush pandit":
      return {
        name: "Ishita",
        partner: "Kush",
        room: {
          roomName: "Room 6 - Mono Cariblanco",
          roomImage: room6,
          roommate: "Matt and Boston",
        },
      };
    case "karen house":
      return {
        name: "Ishita",
        partner: "Kush",
        room: {
          roomName: "Room 6 - Mono Cariblanco",
          roomImage: room6,
          roommate: "Matt and Boston",
        },
      };
    case "karen guest":
      return {
        name: "Aunt Rene",
      };
    case "matt marchiony":
      return {
        name: "Matt",
        room: {
          roomName: "Room 6 - Mono Cariblanco",
          roomImage: room6,
          roommate: "Ishita, Kush and Boston",
        },
      };
    case "Boston Burke":
      return {
        name: "Boston",
      };
    case "cara bohmann":
    case "tj holt":
      return {
        name: "Cara",
        partner: "TJ",
        room: {
          roomName: "Room 7 - Guaria Morada",
          roomImage: apt1,
        },
      };
    case "dirk bohmann":
    case "catherine ovitt":
      return {
        name: "mami",
        partner: "papi",
        room: {
          roomName: "Room 8 - Mariposa Morpho",
          roomImage: apt2,
        },
      };

    case "rene miller":
      return {
        name: "Aunt Rene",
        isFamily: true,
      };
    case "carol miller":
      return {
        name: "Grandma",
        partner: "Grandpa",
        isFamily: true,
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
        isFamily: true,
      };
    case "ann quinn":
      return {
        name: "Grandma",
        partner: "Grandpa",
        isFamily: true,
      };
    case "resa pearson":
    case "tom pearson":
      return {
        name: "Aunt Resa",
        partner: "Uncle Tom",
        isFamily: true,
      };
    case "julia dunbar":
      return {
        name: "Julia",
        partner: "Jake",
      };
    case "chuan xia":
    case "john mcelmurray":
      return {
        name: "Chuan",
        partner: "John",
      };
    case "julia fyffe":
      return {
        name: "Julia",
      };
    case "christina rusinski":
      return {
        name: "Christina",
      };
    case "jamie roe":
      return {
        name: "Jamie",
      };
    case "christina tobias":
    case "basil adams":
      return {
        name: "Basil",
        partner: "Christina",
      };
    case "sabrina vega":
    case "miguel velasco":
      return {
        name: "Sabrina",
        partner: "Miguel",
      };
    case "adana mcwhinney":
      return {
        name: "Adana",
      };
    case "felix bohmann":
      return {
        name: "Felix",
      };
    case "hayley bell":
    case "dave costello":
      return {
        name: "Hayley",
        partner: "Dave",
      };
    case "chuan xia":
    case "john mcelmurray":
      return {
        name: "Chuan",
        partner: "John",
      };
    case "joerg bohmann":
    case "christiane bohmann":
      return {
        name: "Joerg",
        partner: "Christiane",
        announceOnly: true,
      };
    case "mary anderson":
      return {
        name: "Aunt Mary",
        announceOnly: true,
      };
    case "nancy ovitt":
      return {
        name: "Aunt Nancy",
        announceOnly: true,
      };
    case "ruth ovitt":
      return {
        name: "Aunt Ruth",
        announceOnly: true,
      };
    case "thomas ovitt":
      return {
        name: "Uncle Thomas",
        announceOnly: true,
      };
    case "jackie west":
      return {
        name: "Aunt Jackie",
        announceOnly: true,
      };
    default:
      return null;
  }
};
