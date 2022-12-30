import React from "react";
import room1 from "../assets/images/room-1.jpg";
import room2 from "../assets/images/room-2-rana.jpg";
import room3 from "../assets/images/room-3-toucan.jpg";
import room4 from "../assets/images/room-4.jpg";
import room5 from "../assets/images/room-5-lapa.jpg";
import room6 from "../assets/images/room-6-mono.jpg";
import apt1 from "../assets/images/room-7.jpg";
import apt2 from "../assets/images/room-8.jpg";
import tvroom from "../assets/images/tvroom.jpg";

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
          roomImage: room3,
          roommate: "Ishita and Kush",
        },
      };
    case "ishita ganotra":
    case "kush pandit":
      return {
        name: "Ishita",
        partner: "Kush",
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
    case "matt marchiony":
    case "amanda levine":
      return {
        name: "Matt",
        partner: "Amanda",
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
          roommate: "Matt and Amanda",
        },
      };
    case "john daguerre-bradford":
      return {
        name: "John",
        room: {
          roomName: "Room 6 - Mono Cariblanco",
          roomImage: room6,
          roommate: "Cara and TJ",
        },
      };
    case "cara bohmann":
    case "tj holt":
      return {
        name: "Cara",
        partner: "TJ",
        room: {
          roomName: "Room 6 - Mono Cariblanco",
          roomImage: room6,
          roommate: "John",
        },
      };
    case "boston burke":
      return {
        name: "Boston",
        room: {
          roomName: "TV room",
          roomImage: tvroom,
        },
      };
    case "frances shapiro":
    case "will deuschle":
      return {
        name: "Frances",
        partner: "Will",
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
    case "mady bucher":
    case "sahil doshi":
      return {
        name: "Mady",
        partner: "Sahil",
      };
    case "mohona ahmed":
    case "mir ahmed":
      return {
        name: "Mohona",
        partner: "Mir",
      };
    case "deby lemire":
    case "dave lemire":
    case "david lemire":
      return {
        name: "Aunt Deby",
        partner: "Uncle Dave",
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
    case "jacob feiertag":
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
    case "charlie moore":
      return {
        name: "Jamie",
        partner: "Charlie",
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
    case "trey mckula":
      return {
        name: "Trey",
      };
    case "sam winebrake":
      return {
        name: "Sam",
      };
    case "diane hadley":
      return {
        name: "Diane",
      };
    case "krista opsahl-ong":
      return {
        name: "Krista",
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
    case "sarah balles":
      return {
        name: "Sarah",
      };
    case "jon williams":
      return {
        name: "Jon",
      };
    case "wolfe glick":
    case "haley weiss":
      return {
        name: "Wolfe",
        partner: "Haley",
      };
    case "natalie rodeman":
    case "joe baier":
      return {
        name: "Natalie",
        partner: "Joe",
      };
    case "courtney newberry":
    case "patrick Anzalone":
      return {
        name: "Courtney",
        partner: "Pat",
      };
    // announce only
    case "carol miller":
      return {
        name: "Grandma",
        partner: "Grandpa",
        isFamily: true,
        announceOnly: true,
      };
    case "ann quinn":
      return {
        name: "Grandma",
        partner: "Grandpa",
        announceOnly: true,
      };
    case "joerg bohmann":
    case "jörg bohmann":
    case "christiane bohmann":
      return {
        name: "Jörg",
        partner: "Christiane",
        announceOnly: true,
      };
    case "frank bohmann":
    case "ruth bohmann":
      return {
        name: "Frank",
        partner: "Ruth",
        announceOnly: true,
      };
    case "kerstin bohmann":
    case "ingrid bohmann":
      return {
        name: "Kerstin",
        partner: "Ingrid",
        announceOnly: true,
      };
    case "jeanmarie jonston":
    case "greg jonston":
      return {
        name: "Aunt Jeanmarie",
        partner: "Uncle Greg",
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
    case "pete miller":
    case "peter miller":
    case "libby miller":
      return {
        name: "Uncle Pete",
        partner: "Aunt Libby",
        announceOnly: true,
      };
    case "gail ovitt":
      return {
        name: "Aunt Gail",
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
    case "brian kilb":
    case "lynn kilb":
      return {
        name: "Uncle Brian",
        partner: "Aunt Lynn",
        announceOnly: true,
      };
    case "paula pilarski":
    case "jack pilarski":
      return {
        name: "Paula",
        partner: "Jack",
        announceOnly: true,
      };
    case "mary bohan":
    case "brad bennett":
      return {
        name: "Mr. Bennett",
        partner: "Mrs. Bohan",
        announceOnly: true,
      };
    case "billy fritz":
    case "kelly fritz":
      return {
        name: "Uncle Billy",
        partner: "Aunt Kelly",
        announceOnly: true,
      };
    case "karen house":
      return {
        name: "Ishita",
        partner: "Kush",
        room: {
          roomName: "Room 6 - Mono Cariblanco",
          roomImage: room6,
          roommate: "Matt and Amanda",
        },
      };
    case "karen guest":
      return {
        name: "Aunt Rene",
      };
    default:
      return null;
  }
};
