import AppWrapper from "./contexts/AppCtx";
import AuthWrapper from "./contexts/AuthCtx";
import DashboardWrapper from "./contexts/DashboardCtx";

export default function Wrapper({ children }) {
  return (
    <AppWrapper>
      <AuthWrapper>
        <DashboardWrapper>{children}</DashboardWrapper>
      </AuthWrapper>
    </AppWrapper>
  );
}
