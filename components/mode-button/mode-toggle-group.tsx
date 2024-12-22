import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Computer, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { ReactElement } from "react";

export const ModeToggleGroupButton = (): ReactElement => {
    const { setTheme } = useTheme();

    return (
        <ToggleGroup
            type="single"
            onValueChange={(val) => setTheme(val)}
            className="border rounded-lg"
        >
            <ToggleGroupItem
                title="light theme"
                value="light"
                aria-label="Toggle Light Mode"
            >
                <Sun className="h-4 w-4" />
                <span className="sr-only">Light Mode</span>
            </ToggleGroupItem>
            <ToggleGroupItem
                title="dark theme"
                value="dark"
                aria-label="Toggle Dark Mode"
            >
                <Moon className="h-4 w-4" />
                <span className="sr-only">Dark Mode</span>
            </ToggleGroupItem>
            <ToggleGroupItem
                title="system"
                value="system"
                aria-label="Toggle System Mode"
            >
                <Computer className="h-4 w-4" />
                <span className="sr-only">System Mode</span>
            </ToggleGroupItem>
        </ToggleGroup>
    );
};
