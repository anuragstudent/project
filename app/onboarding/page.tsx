"use client";

import { Progress } from "@/components/ui/progress";
import { OnboardingSteps } from "@/components/onboarding/onboarding-steps";
import { useOnboardingProgress } from "@/hooks/use-onboarding-progress";

export default function OnboardingPage() {
  const { progress, currentStep } = useOnboardingProgress();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Welcome to NFC Profile</h1>
          <div className="space-y-2">
            <Progress value={progress} className="w-full" />
            <p className="text-sm text-muted-foreground">
              {progress}% Complete ({currentStep}/5 tasks)
            </p>
          </div>
        </div>
        <OnboardingSteps />
      </div>
    </div>
  );
}