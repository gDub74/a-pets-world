import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export const PageLayout = (props: HTMLAttributes<HTMLDivElement>) => {
    const { className, children, ...restProps } = props;
    return (
        <div className={cn("p-10", className)} {...restProps}>
            {children}
        </div>
    );
};
