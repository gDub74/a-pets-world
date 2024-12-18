import { cn } from "@/lib/utils";
import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

const headingTypographyVariants = cva("font-bold", {
    variants: {
        variant: {
            h1: "text-2xl mb-4",
            h2: "text-3xl mb-4",
            h3: "text-2xl mb-3",
            h4: "text-xl mb-2",
            h5: "text-lg mb-2 font-semibold",
            h6: "text-base mb-2n font-semibold",
        },
    },
    defaultVariants: {
        variant: "h1",
    },
});

export interface HeadingTypographyProps
    extends React.HTMLAttributes<HTMLHeadingElement> {
    asChild?: boolean;
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const HeadingTypography = React.forwardRef<
    HTMLHeadingElement,
    HeadingTypographyProps
>(({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : (variant ?? "h1");
    return (
        <Comp
            className={cn(headingTypographyVariants({ variant, className }))}
            ref={ref}
            {...props}
        />
    );
});

HeadingTypography.displayName = "HeadingTypography";

export { HeadingTypography, headingTypographyVariants };
