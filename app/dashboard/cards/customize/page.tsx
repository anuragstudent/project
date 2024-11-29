"use client";

import { CardCustomizer } from "@/components/cards/card-customizer";
import { Card } from "@/components/ui/card";

export default function CustomizeCardPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Customize Your NFC Card</h1>
      <Card className="p-6">
        <CardCustomizer />
      </Card>
    </div>
  );
}