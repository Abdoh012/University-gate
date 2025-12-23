import { DashboardCtx } from "@/components/contexts/DashboardCtx";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import LatestStudents from "@/components/dashboard/LatestStudents";
import Overview from "@/components/dashboard/Overview";
import StatsCards from "@/components/dashboard/StatsCards";
import { use } from "react";

export default function Dashboard() {
  
  // -------------------- Component structure --------------------
  return (
    <>
      {/* Header */}
      <DashboardHeader />

      {/* Stats cards */}
      <StatsCards />

      {/* Stats overview */}
      <Overview />

      {/* Some of students */}
      <LatestStudents />
    </>
  );
}
