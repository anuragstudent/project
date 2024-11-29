"use client";

import { Card } from "@/components/ui/card";
import { Eye, Phone, MessageSquare, Share2 } from "lucide-react";

const stats = [
  {
    title: "Total Profile Views",
    value: "12.5K",
    change: "+12%",
    icon: Eye,
  },
  {
    title: "Contact Downloads",
    value: "1,234",
    change: "+25%",
    icon: Phone,
  },
  {
    title: "Messages Received",
    value: "856",
    change: "+18%",
    icon: MessageSquare,
  },
  {
    title: "Profile Shares",
    value: "432",
    change: "+8%",
    icon: Share2,
  },
];

export function AnalyticsStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="p-6">
          <div className="flex items-center space-x-4">
            <div className="bg-primary/10 p-2 rounded-full">
              <stat.icon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{stat.title}</p>
              <div className="flex items-baseline space-x-2">
                <h3 className="text-2xl font-bold">{stat.value}</h3>
                <span className="text-sm text-green-500">{stat.change}</span>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}