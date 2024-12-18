import { Info } from "lucide-react";
import { ReactElement, ReactNode } from "react";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "./tooltip";

/** Accepts children for the TooltipContent and uses in info icon as rhe Tooltip Trigger */
export const InfoTooltip = ({
    children,
}: {
    children: ReactNode;
}): ReactElement => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Info
                        className="ml-0.5 mb-0.5 inline"
                        fill="hsl(var(--info))"
                        stroke={"hsl(var(--primary-foreground))"}
                        aria-label="Info"
                    />
                </TooltipTrigger>
                <TooltipContent>{children}</TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};
