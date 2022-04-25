import React from "react";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import { getGuestInfo, Guest } from "./utilities";
// import { guest, house } from "./utilities";

// type User = { username: string; isHouse: boolean };
interface AuthContextType {
  guest: Guest | null;
  signin: (user: string, callback: (success: boolean) => void) => void;
  signout: (callback: VoidFunction) => void;
}

let AuthContext = React.createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  let [guest, setGuest] = React.useState<Guest | null>(null);

  let signin = (username: string, callback: (success: boolean) => void) => {
    let guestInfo = getGuestInfo(username.toLowerCase());
    global.console.log(guestInfo);
    console.log(guestInfo);
    if (guestInfo) {
      setGuest(guestInfo);
      callback(true);
    } else {
      setGuest(null);
      callback(false);
    }
  };

  let signout = (callback: VoidFunction) => {
    setGuest(null);
    callback();
  };

  let value = { guest, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return React.useContext(AuthContext);
}

// export function AuthStatus() {
//   let auth = useAuth();
//   let navigate = useNavigate();

//   if (!auth.user) {
//     return <p>You are not logged in.</p>;
//   }

//   return (
//     <p>
//       Welcome {auth.user}!{" "}
//       <button
//         onClick={() => {
//           auth.signout(() => navigate("/"));
//         }}
//       >
//         Sign out
//       </button>
//     </p>
//   );
// }

export function RequireAuth({ children }: { children: JSX.Element }) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.guest) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
