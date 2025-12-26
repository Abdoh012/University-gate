// Shadcn pie chart
import { Pie, PieChart } from "recharts";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Hooks
import { use } from "react";

// Ctx
import { AppCtx } from "../contexts/AppCtx";
import { DashboardCtx } from "../contexts/DashboardCtx";

export default function ChartPieSimple() {
  // -------------------- Contexts --------------------
  const { gateStats, loggedStudents } = use(DashboardCtx);
  console.log(loggedStudents);
  console.log(gateStats);
  //  End of contexts

  // -------------------- Variables --------------------
  const totalEntries = gateStats && gateStats.total_entries; // Total gate entries

  const rejectedEntries =
    loggedStudents &&
    loggedStudents.filter((stu) => stu.status === "denied").length; // Total rejected gate entries

  const uniqueStudents = gateStats && gateStats.unique_students_today; // Total Unique students

  const chartData = [
    {
      entry: "Unique Students",
      students: uniqueStudents,
      fill: "var(--chart-2)",
    },
    {
      entry: "Successful Entries",
      students: totalEntries,
      fill: "var(--chart-6)",
    },
    {
      entry: "Rejected Entries",
      students: rejectedEntries,
      fill: "var(--chart-1)",
    },
  ]; // Chart data

  const chartConfig = {
    "Unique Students": {
      label: "Unique",
      color: "var(--chart-1)",
    },
    "Successful Entries": {
      label: <p className="me-1">Successful</p>,
      color: "var(--chart-2)",
    },
    "Rejected Entries": {
      label: <p className="me-1">Rejected</p>,
      color: "var(--chart-3)",
    },
  }; // Chart config
  // End of variables

  // -------------------- Component Structure --------------------
  return (
    <Card className="flex flex-col mb-5 shadow-none duration-300 hover:shadow-sm">
      {/* Header */}
      <CardHeader className="items-center pb-0">
        <CardTitle className="capitalize">Entry stats overview</CardTitle>
      </CardHeader>

      {/* Content */}
      <CardContent className="flex-1 pb-0">
        <div className="text-center capitalize ">
          today's entry distribution
        </div>
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[220px] sm:max-h-[250px] [&_svg]:overflow-visible [&_.recharts-pie-label-text]:hidden sm:[&_.recharts-pie-label-text]:block"
        >
          {/* Pie Chart */}
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent hideLabel />}
              cursor={false}
            />
            <Pie
              className="w-full"
              outerRadius={70}
              data={chartData}
              dataKey="students"
              nameKey="entry"
              label={({ name, percent }) =>
                percent ? `${name}: ${(percent * 100).toFixed(0)}%` : ""
              }
              labelLine={false}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>

      {/* Footer */}
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex flex-wrap justify-center sm:justify-evenly gap-4 w-full text-sm">
          {chartData.map((item) => (
            <div key={item.entry} className="flex items-center gap-2">
              <span
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: item.fill }}
              />
              <span className="capitalize">{item.entry}</span>
            </div>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
