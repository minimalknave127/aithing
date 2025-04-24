import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Brain,
  Calendar,
  CheckCircle,
  Sparkles,
  Clock,
  Target,
  BarChart3,
  Lightbulb,
} from "lucide-react";

export function DashboardCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            <CardTitle>Today's Focus</CardTitle>
          </div>
          <CardDescription>Your top priorities for today</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            AI-suggested tasks based on your goals and deadlines
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            <CardTitle>Upcoming Schedule</CardTitle>
          </div>
          <CardDescription>Your optimized daily plan</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Smartly organized tasks with optimal time slots
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-primary" />
            <CardTitle>Productivity Insights</CardTitle>
          </div>
          <CardDescription>Your performance metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Track your progress and get personalized recommendations
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-primary" />
            <CardTitle>AI Suggestions</CardTitle>
          </div>
          <CardDescription>Smart task optimizations</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Get AI-powered recommendations for better task management
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
