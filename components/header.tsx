"use client";

import { useRouter } from "next/navigation";
import { ChevronLeftIcon, MoreVertical } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Fragment } from "react";
import { Separator } from "./ui/separator";

export type HeaderActionProp = {
  label: string;
  onClick?: () => void;
  type: "button" | "link";
  href?: string; // For link type
  buttonVariantProps?: React.ComponentProps<typeof Button>;
  icon?: React.ReactNode;
  hidden?: boolean;
};

type HeaderProps = {
  title?: string;
  actions?: HeaderActionProp[];
  back?: boolean;
  onBack?: () => void;
  renderTitle?: React.ReactNode;
  description?: string;
  multipleBtns?: boolean;
  dividers?: number[];
};

export default function AppHeader({
  title,
  actions = [],
  back,
  onBack,
  renderTitle,
  description,
  dividers,
}: HeaderProps) {
  const router = useRouter();

  function handleGoBack() {
    if (onBack) {
      onBack();
    } else {
      router.back();
    }
  }

  const shownActions = actions.filter((e) => e.hidden !== true);

  return (
    <div
      className={cn(
        "mb-4  flex-row justify-between  flex items-start"
        // multipleBtns ? "grid grid-cols-1" : "flex flex-row justify-between"
      )}
    >
      <div className="flex sm:flex-row sm:justify-center gap-2 items-start">
        {back && (
          <Button
            onClick={handleGoBack}
            size="icon"
            variant="outline"
            type="button"
          >
            <ChevronLeftIcon />
          </Button>
        )}
        <div>
          {renderTitle ? (
            renderTitle
          ) : (
            <h1 className="text-xl font-semibold">{title}</h1>
          )}
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
      </div>

      {shownActions.length > 0 && (
        <div className=" mt-2 xl:mt-0">
          {/* Small device dropdown */}
          <div className="xl:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <MoreVertical />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {shownActions.map((action, index) => (
                  <Fragment key={index}>
                    {dividers?.includes(index) && <DropdownMenuSeparator />}
                    <DropdownMenuItem
                      className={cn(
                        ["destructive", "destructiveGhost"].includes(
                          action.buttonVariantProps?.variant ?? ""
                        ) && "text-destructive"
                      )}
                      onClick={action.onClick}
                      asChild
                    >
                      {action.type === "link" && action.href ? (
                        <Link href={action.href}>
                          {action?.icon}
                          {action.label}
                        </Link>
                      ) : (
                        <button className="w-full" type="button">
                          {action?.icon}
                          {action.label}
                        </button>
                      )}
                    </DropdownMenuItem>
                  </Fragment>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Large device buttons/links */}
          <div className="hidden xl:flex gap-2">
            {shownActions.map((action, index) => (
              <Fragment key={index}>
                {dividers?.includes(index) && (
                  <Separator orientation="vertical" className="h-10 mx-2" />
                )}
                {action.type === "link" && action.href ? (
                  <Link key={index} href={action.href}>
                    <Button {...action.buttonVariantProps}>
                      {action.icon}
                      {action.label}
                    </Button>
                  </Link>
                ) : (
                  <Button
                    key={index}
                    {...action.buttonVariantProps}
                    onClick={action.onClick}
                  >
                    {action.icon}
                    {action.label}
                  </Button>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
