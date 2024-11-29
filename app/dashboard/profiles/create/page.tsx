"use client";

import { ProfileForm } from "@/components/profile/profile-form";
import { Card } from "@/components/ui/card";

export default function CreateProfilePage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Create New Profile</h1>
      <Card className="p-6">
        <ProfileForm />
      </Card>
    </div>
  );
}