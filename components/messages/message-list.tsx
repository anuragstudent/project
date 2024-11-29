"use client";

import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageSquare, User } from "lucide-react";

const messages = [
  {
    id: 1,
    sender: "John Smith",
    message: "Hi, I'd like to connect regarding a business opportunity.",
    date: "2024-03-20T10:00:00",
    read: false,
  },
  {
    id: 2,
    sender: "Sarah Johnson",
    message: "Great meeting you at the conference!",
    date: "2024-03-19T15:30:00",
    read: true,
  },
  // Add more sample messages as needed
];

export function MessageList() {
  return (
    <div>
      {messages.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <MessageSquare className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold">No messages yet</h3>
          <p className="text-sm text-muted-foreground">
            When someone contacts you through your NFC card, messages will appear here
          </p>
        </div>
      ) : (
        <ScrollArea className="h-[600px] pr-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <Card
                key={message.id}
                className={`p-4 ${!message.read ? "bg-primary/5" : ""}`}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <User className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold">{message.sender}</h4>
                        <p className="text-sm text-muted-foreground">
                          {new Date(message.date).toLocaleDateString()}
                        </p>
                      </div>
                      {!message.read && (
                        <span className="bg-primary px-2 py-1 rounded-full text-xs text-primary-foreground">
                          New
                        </span>
                      )}
                    </div>
                    <p className="mt-2">{message.message}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </ScrollArea>
      )}
    </div>
  );
}