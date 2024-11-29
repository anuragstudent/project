"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, User } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProfilesPage() {
  const router = useRouter();

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">My Profiles</h1>
        <Button onClick={() => router.push("/dashboard/profiles/create")}>
          <Plus className="mr-2 h-4 w-4" /> Create Profile
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="p-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <User className="w-12 h-12 text-primary" />
            <h3 className="text-lg font-semibold">Personal Profile</h3>
            <p className="text-sm text-muted-foreground">
              Your default personal profile
            </p>
            <Button variant="outline" className="w-full" onClick={() => router.push("/dashboard/profiles/edit/1")}>
              Edit Profile
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}