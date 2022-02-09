import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import * as serviceWorker from "./serviceWorker";
import {
  BrowserRouter as Router,
  // Navigate,
  Route,
  Routes,
  //useLocation,
  //useNavigate,
} from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  About,
  Login,
  // fakeAuthProvider,
  RequireAuth,
  AuthProvider,
} from "./components";

ReactDOM.render(
  <Router>
    <AuthProvider>
      <Navigation />

      <div className="main" style={{ width: "100%", top: "0px", left: "0px" }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route
            path="/about"
            element={
              <RequireAuth>
                <About />
              </RequireAuth>
            }
          />
        </Routes>
      </div>
    </AuthProvider>
  </Router>,

  document.getElementById("root")
);

// serviceWorker.unregister();
