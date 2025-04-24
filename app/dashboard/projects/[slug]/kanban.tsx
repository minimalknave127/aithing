"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { KanbanBoard } from "@/components/ui/kanban/KanbanBoard";
import { ScrollArea } from "@/components/ui/scroll-area";

import { GripVertical } from "lucide-react";
import * as React from "react";

export default function KanbanDemo() {
  return (
    <div className=" overflow-x-scroll w-full flex-1 grid w-full">
      <div className="w-max ">
        <KanbanBoard />
      </div>
    </div>
  );
}
