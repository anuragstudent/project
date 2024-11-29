"use client";

import { ProfileEditForm } from "@/components/profile/profile-edit-form";
import { Card } from "@/components/ui/card";
import { useParams } from "next/navigation";

export default function EditProfilePage() {
  const params = useParams();
  const profileId = params.id as string;

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Edit Profile</h1>
      <Card className="p-6">
        <ProfileEditForm profileId={profileId} />
      </Card>
    </div>
  );
}