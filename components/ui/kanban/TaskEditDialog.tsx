import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Task } from "./TaskCard";
import { useState } from "react";

interface TaskEditDialogProps {
  task: Task;
  onSave: (updatedTask: Task) => void;
  children: React.ReactNode;
}

export function TaskEditDialog({
  task,
  onSave,
  children,
}: TaskEditDialogProps) {
  const [content, setContent] = useState(task.content);
  const [open, setOpen] = useState(false);

  const handleSave = () => {
    onSave({ ...task, content });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Task</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter task description..."
            className="min-h-[100px]"
          />
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSave}>Save</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
