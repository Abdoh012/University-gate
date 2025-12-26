// Hooks
import { createContext } from "react";

// Create context component
export const AppCtx = createContext({});

export default function AppWrapper({ children }) {
  // -------------------- States --------------------

  // End of states

  // -------------------- Queries --------------------

  // End of Functions

  // -------------------- Context values --------------------
  const ctxValues = {};

  // -------------------- Component Structure --------------------
  return <AppCtx value={ctxValues}>{children}</AppCtx>;
}
