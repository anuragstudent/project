"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, CreditCard } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CardsPage() {
  const router = useRouter();

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">My NFC Cards</h1>
        <Button onClick={() => router.push("/dashboard/cards/customize")}>
          <Plus className="mr-2 h-4 w-4" /> Customize New Card
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="p-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <CreditCard className="w-12 h-12 text-primary" />
            <h3 className="text-lg font-semibold">Business Card</h3>
            <p className="text-sm text-muted-foreground">
              Linked to Personal Profile
            </p>
            <Button variant="outline" className="w-full" onClick={() => router.push("/dashboard/cards/edit/1")}>
              Manage Card
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}