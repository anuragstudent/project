"use client";

import { Card } from "@/components/ui/card";
import { UseFormReturn } from "react-hook-form";
import { CreditCard } from "lucide-react";

interface CardPreviewProps {
  form: UseFormReturn<{
    design: string;
    color: string;
    material: string;
    text: string;
  }>;
}

export function CardPreview({ form }: CardPreviewProps) {
  const { watch } = form;
  const design = watch("design");
  const color = watch("color");
  const text = watch("text");

  return (
    <div className="sticky top-8">
      <h3 className="text-lg font-semibold mb-4">Preview</h3>
      <Card className={`p-6 aspect-[1.586/1] ${color === "black" ? "bg-black text-white" : ""}`}>
        <div className="relative h-full flex flex-col justify-between">
          <div className="absolute top-0 right-0">
            <CreditCard className="h-8 w-8" />
          </div>
          <div className="mt-12">
            <p className="text-sm opacity-70">NFC Business Card</p>
            <p className="text-lg font-semibold mt-1">{text || "Your Name"}</p>
          </div>
          <div className="text-sm opacity-70">
            <p>Tap to connect</p>
          </div>
        </div>
      </Card>
    </div>
  );
}