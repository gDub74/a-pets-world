"use client";

import { ReactElement } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "../ui/tooltip";
import { cn } from "@/lib/utils";

export const ModeToggleButton = ({
    className,
    ...props
}: React.ComponentProps<typeof Button>): ReactElement => {
    const { setTheme, theme } = useTheme();

    const renderIcon = () => {
        if (theme && theme === "dark") {
            return <Moon color="white" className="h-[1rem] w-[1rem] " />;
        }

        return <Sun className="h-[1rem] w-[1rem]" />;
    };

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() =>
                            setTheme(theme === "dark" ? "light" : "dark")
                        }
                        className={cn("h-7 w-7", className)}
                        {...props}
                    >
                        {renderIcon()}
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>
                        {theme === "dark"
                            ? "Switch to light mode"
                            : "Switch to dark mode"}
                    </p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};
