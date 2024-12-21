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
            <ToggleGroupItem value="light" aria-label="Toggle Light Mode">
                <Sun className="h-4 w-4" />
                <span className="sr-only">Light Mode</span>
            </ToggleGroupItem>
            <ToggleGroupItem value="dark" aria-label="Toggle Dark Mode">
                <Moon className="h-4 w-4" />
                <span className="sr-only">Dark Mode</span>
            </ToggleGroupItem>
            <ToggleGroupItem value="system" aria-label="Toggle System">
                <Computer className="h-4 w-4" />
                <span className="sr-only">System Mode</span>
            </ToggleGroupItem>
        </ToggleGroup>
    );
};
