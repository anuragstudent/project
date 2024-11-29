import { Card } from "@/components/ui/card";
import {
  BarChart,
  UserCircle,
  PhoneCall,
  MessageSquare,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Dashboard Overview</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <UserCircle className="w-8 h-8 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Profile Visits</p>
              <h3 className="text-2xl font-bold">1,234</h3>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <PhoneCall className="w-8 h-8 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Phone Downloads</p>
              <h3 className="text-2xl font-bold">56</h3>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <MessageSquare className="w-8 h-8 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">New Messages</p>
              <h3 className="text-2xl font-bold">12</h3>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <BarChart className="w-8 h-8 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Active Cards</p>
              <h3 className="text-2xl font-bold">3</h3>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}