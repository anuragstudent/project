"use client";

import { Card } from "@/components/ui/card";
import { SettingsForm } from "@/components/settings/settings-form";

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Settings</h1>
      <Card className="p-6">
        <SettingsForm />
      </Card>
    </div>
  );
}