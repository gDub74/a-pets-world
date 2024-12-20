import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import React from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";

const linkVariants = cva(
    "inline-flex items-center text-center hover:underline focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800",
    {
        variants: {
            variant: {
                primary:
                    "text-primary-500 hover:text-primary-600 focus:text-primary-600",
                secondary:
                    "text-secondary-500 hover:text-secondary-600 focus:text-secondary-600",
                asButton:
                    "px-2 py-1 font-medium text-white bg-info rounded hover:bg-blue-800 dark:bg-blue-400 dark:hover:bg-blue-700 dark:text-stone-950",
            },
            size: {
                sm: "text-sm",
                md: "text-base",
                lg: "text-lg",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
        },
    },
);

export interface LinkProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
        Omit<NextLinkProps, "href"> {
    href: string;
    asChild?: boolean;
    variant?: "primary" | "secondary" | "asButton";
    size?: "sm" | "md" | "lg";
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : NextLink;
        return (
            <Comp
                className={cn(linkVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    },
);

Link.displayName = "Link";

export { Link, linkVariants };
