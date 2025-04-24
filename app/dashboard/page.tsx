import { createClient } from "@/utils/supabase/server";
import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";
import { DashboardCards } from "@/components/dashboard-cards";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-12 p-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-lg text-muted-foreground">
          Welcome back! Here's your AI-powered task management overview.
        </p>
      </div>

      <DashboardCards />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">
            Your Profile
          </h2>
          <div className="bg-card p-6 rounded-lg border">
            <div className="space-y-2">
              <p className="text-sm font-medium">Email</p>
              <p className="text-sm text-muted-foreground">{user.email}</p>
            </div>
            {user.user_metadata?.first_name && (
              <div className="space-y-2 mt-4">
                <p className="text-sm font-medium">Name</p>
                <p className="text-sm text-muted-foreground">
                  {user.user_metadata.first_name} {user.user_metadata.last_name}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Quick Stats</h2>
          <div className="bg-card p-6 rounded-lg border">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-sm font-medium">Tasks Today</p>
                <p className="text-2xl font-bold">0</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Completed</p>
                <p className="text-2xl font-bold">0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
