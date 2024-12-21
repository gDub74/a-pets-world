"use client";

import { ReactElement } from "react";
import { Computer, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const ModeToggleButton = ({
    hideLabel = false,
    className,
    ...props
}: React.ComponentProps<typeof Button> & {
    hideLabel?: boolean;
}): ReactElement | null => {
    const { setTheme, theme } = useTheme();

    // /**
    //  *  This silliness is a suggested solution to prevent Hydration issue since the theme is not available on the server.
    //  *  https://nextjs.org/docs/messages/react-hydration-error#solution-1-using-useeffect-to-run-on-the-client-only
    //  * **/
    // const [isClient, setIsClient] = useState(false);
    // useEffect(() => {
    //     setIsClient(true);
    // }, []);

    const renderIcon = () => {
        if (theme && theme === "dark") {
            return <Moon color="white" className="h-4 w-4 ml-auto" />;
        }

        if (theme === "system") {
            return <Computer className="h-4 w-4 ml-auto" />;
        }

        return <Sun className="h-4 w-4 ml-auto" />;
    };

    // if (!isClient) {
    //     return null;
    // }

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={cn("h-7 w-7", className)}
            {...props}
        >
            <div className="flex items-center">
                {hideLabel ? null : (
                    <label className="text-sm mr-1">Toggle Theme</label>
                )}
                {renderIcon()}
            </div>
        </Button>
    );
};
