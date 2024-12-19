"use client";

import { ReactElement } from "react";
import { ModeToggleButton } from "./mode-toggle-button";
import { SidebarTrigger } from "../ui/sidebar";
import { UserButton } from "@clerk/nextjs";
import { AvatarSignInButton } from "./avatar-sign-in-button";

export const AppHeader = (): ReactElement => (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-border">
        <div className="sticky top-0 z-50 w-full flex items-center">
            <SidebarTrigger />
            <div className="ml-auto flex items-center">
                <ModeToggleButton className="mr-2" />
                <span className="mt-1 mr-1">
                    <UserButton />
                </span>
                <AvatarSignInButton />
            </div>
        </div>
    </header>
);
