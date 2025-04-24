import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Brain, Calendar, CheckCircle, Sparkles } from "lucide-react";

export function AITaskCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-primary" />
            <CardTitle>AI-Powered Task Management</CardTitle>
          </div>
          <CardDescription>
            Let artificial intelligence help you organize and prioritize your
            tasks efficiently
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Our AI analyzes your tasks and suggests optimal schedules and
            priorities based on your work patterns.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            <CardTitle>Smart Scheduling</CardTitle>
          </div>
          <CardDescription>
            Intelligent calendar integration and time management
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Automatically schedule tasks based on your availability, deadlines,
            and energy levels throughout the day.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            <CardTitle>Progress Tracking</CardTitle>
          </div>
          <CardDescription>
            Monitor your productivity and task completion
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Get insights into your productivity patterns and receive
            personalized recommendations for improvement.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <CardTitle>Smart Suggestions</CardTitle>
          </div>
          <CardDescription>
            AI-driven task recommendations and optimizations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Receive intelligent suggestions for task organization, time
            allocation, and productivity improvements.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
