"use client";

import { Card } from "@/components/ui/card";
import { AnalyticsChart } from "@/components/analytics/analytics-chart";
import { AnalyticsStats } from "@/components/analytics/analytics-stats";

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Analytics</h1>
      <AnalyticsStats />
      <Card className="p-6">
        <AnalyticsChart />
      </Card>
    </div>
  );
}