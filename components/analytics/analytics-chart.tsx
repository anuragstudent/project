"use client";

import { Line, LineChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { date: "Jan", views: 400, downloads: 240 },
  { date: "Feb", views: 300, downloads: 139 },
  { date: "Mar", views: 200, downloads: 980 },
  { date: "Apr", views: 278, downloads: 390 },
  { date: "May", views: 189, downloads: 480 },
  { date: "Jun", views: 239, downloads: 380 },
];

const defaultProps = {
  xAxisProps: {
    dataKey: "date",
    stroke: "hsl(var(--muted-foreground))",
    strokeWidth: 1,
  },
  yAxisProps: {
    stroke: "hsl(var(--muted-foreground))",
    strokeWidth: 1,
  },
};

export function AnalyticsChart() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Profile Performance</h2>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <XAxis {...defaultProps.xAxisProps} />
            <YAxis {...defaultProps.yAxisProps} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="views"
              stroke="hsl(var(--chart-1))"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="downloads"
              stroke="hsl(var(--chart-2))"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}