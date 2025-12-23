// Hooks
import axios from "axios";
import { createContext, useEffect, useState } from "react";

// Create context component
export const AppCtx = createContext({
  userData: null,
  SetUserData: null,
});

export default function AppWrapper({ children }) {
  // -------------------- States --------------------

  // If localStorage has user value send it to user state
  const [user, setUser] = useState(
    localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"))
  );  
  // End of states

  // -------------------- Functions --------------------

  function setUserData(user) {    
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  }
  // End of Functions

  // -------------------- Context values --------------------
  const ctxValues = { setUserData: setUserData, userData: user };

  // -------------------- Component Structure --------------------
  return <AppCtx value={ctxValues}>{children}</AppCtx>;
}
