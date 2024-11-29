"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  LayoutDashboard,
  UserCircle,
  CreditCard,
  MessageSquare,
  BarChart,
  Settings,
} from "lucide-react";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();

  const routes = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/dashboard",
    },
    {
      label: "Profiles",
      icon: UserCircle,
      href: "/dashboard/profiles",
    },
    {
      label: "Cards",
      icon: CreditCard,
      href: "/dashboard/cards",
    },
    {
      label: "Messages",
      icon: MessageSquare,
      href: "/dashboard/messages",
    },
    {
      label: "Analytics",
      icon: BarChart,
      href: "/dashboard/analytics",
    },
    {
      label: "Settings",
      icon: Settings,
      href: "/dashboard/settings",
    },
  ];

  return (
    <div className={cn("pb-12 w-64", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Navigation</h2>
          <ScrollArea className="h-[calc(100vh-10rem)]">
            <div className="space-y-1">
              {routes.map((route) => (
                <Button
                  key={route.href}
                  variant={pathname === route.href ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  asChild
                >
                  <Link href={route.href}>
                    <route.icon className="mr-2 h-4 w-4" />
                    {route.label}
                  </Link>
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}