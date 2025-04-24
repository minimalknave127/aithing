import AppHeader from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HouseIcon, PanelsTopLeftIcon } from "lucide-react";
import Link from "next/link";
import KanbanView from "./kanban";

export default async function ProjectPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  let { view } = await searchParams;
  view = (view || "kanban") as string;

  return (
    <div className="grid">
      <AppHeader title="Projekt 1" description="asd" />
      <div className="overflow-scroll">
        <Tabs value={view} className="w-full">
          <ScrollArea>
            <TabsList className="text-foreground mb-3 h-auto gap-2 rounded-none border-b bg-transparent px-0 py-1">
              <Link href="?view=kanban">
                <TabsTrigger
                  value="kanban"
                  className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                >
                  <HouseIcon
                    className="-ms-0.5 me-1.5 opacity-60"
                    size={16}
                    aria-hidden="true"
                  />
                  Kanban
                </TabsTrigger>
              </Link>
              <Link href="?view=calendar">
                <TabsTrigger
                  value="calendar"
                  className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                >
                  <PanelsTopLeftIcon
                    className="-ms-0.5 me-1.5 opacity-60"
                    size={16}
                    aria-hidden="true"
                  />
                  Kalendář
                  <Badge
                    className="bg-primary/15 ms-1.5 min-w-5 px-1"
                    variant="secondary"
                  >
                    3
                  </Badge>
                </TabsTrigger>
              </Link>
            </TabsList>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
          <TabsContent value="kanban">
            <KanbanView />
          </TabsContent>
          <TabsContent value="calendar">
            <p className="text-muted-foreground pt-1 text-center text-xs">
              Content for Tab 2
            </p>
          </TabsContent>
          <TabsContent value="tab-3">
            <p className="text-muted-foreground pt-1 text-center text-xs">
              Content for Tab 3
            </p>
          </TabsContent>
          <TabsContent value="tab-4">
            <p className="text-muted-foreground pt-1 text-center text-xs">
              Content for Tab 4
            </p>
          </TabsContent>
          <TabsContent value="tab-5">
            <p className="text-muted-foreground pt-1 text-center text-xs">
              Content for Tab 5
            </p>
          </TabsContent>
          <TabsContent value="tab-6">
            <p className="text-muted-foreground pt-1 text-center text-xs">
              Content for Tab 6
            </p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
