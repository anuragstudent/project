"use client";

import { CardLinkForm } from "@/components/cards/card-link-form";
import { Card } from "@/components/ui/card";

export default function LinkCardPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Link Card to Profile</h1>
      <Card className="p-6">
        <CardLinkForm />
      </Card>
    </div>
  );
}