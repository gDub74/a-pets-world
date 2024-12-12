import { ReactElement } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
    "inline-flex items-center justify-center rounded-full border p-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
        variants: {
            variant: {
                default:
                    "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
                secondary:
                    "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
                destructive:
                    "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
                notify: "absolute top-0 text-[0.5rem] h-4 w-4 border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80 font-normal",
                outline: "text-foreground",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    },
);

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof badgeVariants> {}

const Badge = ({ className, variant, ...props }: BadgeProps): ReactElement => {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props} />
    );
};

export { Badge, badgeVariants };
