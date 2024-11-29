"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { UserCircle, CreditCard, Link, CheckCircle } from "lucide-react";

export function OnboardingSteps() {
  const router = useRouter();

  const steps = [
    {
      title: "Create Profile",
      description: "Set up your digital identity",
      icon: UserCircle,
      action: () => router.push("/dashboard/profiles/create"),
    },
    {
      title: "Customize Card",
      description: "Design your NFC card",
      icon: CreditCard,
      action: () => router.push("/dashboard/cards/customize"),
    },
    {
      title: "Order Card",
      description: "Get your physical NFC card",
      icon: CreditCard,
      action: () => router.push("/dashboard/cards/order"),
    },
    {
      title: "Link Card",
      description: "Connect card to your profile",
      icon: Link,
      action: () => router.push("/dashboard/cards/link"),
    },
    {
      title: "Complete",
      description: "All set! Start using your NFC card",
      icon: CheckCircle,
      action: () => router.push("/dashboard"),
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {steps.map((step, index) => (
        <Card key={index} className="p-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <step.icon className="w-12 h-12 text-primary" />
            <h3 className="text-lg font-semibold">{step.title}</h3>
            <p className="text-sm text-muted-foreground">{step.description}</p>
            <Button onClick={step.action} className="w-full">
              Start
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}