"use client";

import { Card } from "@/components/ui/card";
import { MessageList } from "@/components/messages/message-list";

export default function MessagesPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Messages</h1>
      <Card className="p-6">
        <MessageList />
      </Card>
    </div>
  );
}