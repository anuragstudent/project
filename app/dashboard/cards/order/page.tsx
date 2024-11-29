"use client";

import { CardOrderForm } from "@/components/cards/card-order-form";
import { Card } from "@/components/ui/card";

export default function OrderCardPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Order Your NFC Card</h1>
      <Card className="p-6">
        <CardOrderForm />
      </Card>
    </div>
  );
}