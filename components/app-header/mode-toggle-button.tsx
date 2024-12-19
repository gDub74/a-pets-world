"use client";

import { ReactElement, useEffect, useState } from "react";
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
}: React.ComponentProps<typeof Button>): ReactElement | null => {
    const { setTheme, theme } = useTheme();

    /**
     *  This silliness is a suggested solution to prevent Hydration issue since the theme is not available on the server.
     *  https://nextjs.org/docs/messages/react-hydration-error#solution-1-using-useeffect-to-run-on-the-client-only
     * **/
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);

    const renderIcon = () => {
        if (theme && theme === "dark") {
            return <Moon color="white" className="h-[1rem] w-[1rem]" />;
        }

        return <Sun className="h-4 w-4" />;
    };

    if (!isClient) {
        return <Sun className="h-4 w-4 mr-4" />;
    }

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
                            ? "Toggle Light Mode"
                            : "Toggle Dark Mode"}
                    </p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};
