"use client";

import { useState, useEffect } from "react";

export function useOnboardingProgress() {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    // In a real app, this would fetch from an API or local storage
    const calculateProgress = () => {
      const totalSteps = 5;
      const completedSteps = 0; // This would be dynamic based on user progress
      setCurrentStep(completedSteps);
      setProgress((completedSteps / totalSteps) * 100);
    };

    calculateProgress();
  }, []);

  return { progress, currentStep };
}