import { TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { use } from "react";
import { DashboardCtx } from "../contexts/DashboardCtx";

// Outside label
const renderOutsideLabel = ({
  cx,
  cy,
  midAngle,
  outerRadius,
  percent,
  name,
}) => {
  const RADIAN = Math.PI / 180;
  const isTop = midAngle > 60 && midAngle < 120;
  const radius = outerRadius + (isTop ? 25 : 55);
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <foreignObject x={x - 75} y={y - 20} width={150} height={45}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontSize: "10px",
          color: "var(--muted-foreground)",
        }}
      >
        <div
          style={{
            fontSize: "12px",
            textAlign: "center",
          }}
        >
          {name}
        </div>
        <div style={{ fontWeight: 600 }}>{(percent * 100).toFixed(0)}%</div>
      </div>
    </foreignObject>
  );
};

export default function ChartPieSimple() {
  // -------------------- Contexts --------------------
  const { gateStats, loggedStudents } = use(DashboardCtx);
  console.log(gateStats);

  //  End of contexts

  // -------------------- Variables --------------------
  const totalEntries = gateStats && gateStats.total_entries;

  const rejectedEntries =
    loggedStudents &&
    loggedStudents.filter((stu) => stu.status === "denied").length;

  const uniqueStudents = gateStats && gateStats.unique_students_today;
  // End of variables

  // -------------------- Chart data --------------------
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
  ];
  // End of chart data

  // -------------------- Chart config --------------------
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
  };
  // End of chart config

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
          className="mx-auto aspect-square max-h-[250px] w-full [&_svg]:overflow-visible"
        >
          <PieChart margin={{ top: 60, right: 140, bottom: 60, left: 140 }}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              className="w-full"
              cx="50%"
              cy="50%"
              outerRadius={65}
              data={chartData}
              dataKey="students"
              nameKey="entry"
              label={renderOutsideLabel}
              labelLine={false}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>

      {/* Footer */}
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex justify-evenly items-center gap-4 w-full text-sm">
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
