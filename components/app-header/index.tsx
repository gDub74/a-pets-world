"use client";

import React, { ReactElement } from "react";
import { ModeToggleButton } from "./mode-toggle-button";
import { SidebarTrigger } from "../ui/sidebar";

export const AppHeader = (): ReactElement => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-border">
            <div className="flex h-14 items-center px-4">
                <div className="mr-4 hidden md:flex">
                    {/* <AppHeaderNav />  */}{" "}
                    {/* TODO: This is a placeholder for the navigation */}
                    <SidebarTrigger />
                </div>
                <button
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-accent-foreground py-2 -ml-2 mr-2 h-8 w-8 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                    type="button"
                    aria-haspopup="dialog"
                    aria-expanded="false"
                    aria-controls="radix-:R15u6ja:"
                    data-state="closed"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="!size-6"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3.75 9h16.5m-16.5 6.75h16.5"
                        ></path>
                    </svg>
                    <span className="sr-only">Toggle Menu</span>
                </button>
                <div className="flex flex-1 items-center justify-between gap-2 md:justify-end">
                    <nav className="flex items-center gap-0.5">
                        <ModeToggleButton />
                    </nav>
                </div>
            </div>
        </header>
    );
};
