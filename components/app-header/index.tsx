"use client";

import { ReactElement } from "react";
import { ModeToggleButton } from "../mode-button/mode-toggle-button";
import { SidebarTrigger } from "../ui/sidebar";

export const AppHeader = (): ReactElement => (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-border">
        <div className="sticky top-0 z-50 w-full flex items-center">
            <SidebarTrigger title="toggle sidebar" />
            <ModeToggleButton hideLabel className="ml-auto mr-1" />
        </div>
    </header>
);
