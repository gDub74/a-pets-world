"use client";

import { ReactElement, useState } from "react";
import { ModeToggleButton } from "./mode-toggle-button";
import { SidebarTrigger } from "../ui/sidebar";
import { RedirectToSignIn, SignedOut, UserButton } from "@clerk/nextjs";
import { CircleUser } from "lucide-react";
import { Button } from "../ui/button";

export const AppHeader = (): ReactElement => {
    const [redirectToSignIn, setRedirectToSignIn] = useState(false);

    if (redirectToSignIn) {
        return <RedirectToSignIn />;
    }

    return (
        <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-border">
            <div className="sticky top-0 z-50 w-full flex items-center">
                <SidebarTrigger />
                <div className="ml-auto flex items-center">
                    <ModeToggleButton className="mr-2" />
                    <span className="mt-1 mr-1">
                        <UserButton />
                    </span>
                    <SignedOut>
                        <Button
                            onClick={() => setRedirectToSignIn(true)}
                            variant="ghost"
                            className="w-7 h-7 bg-transparent [&_svg]:size-5"
                        >
                            <CircleUser color={"hsl(var(--primary))"} />
                            <span className="sr-only">Sign in</span>
                        </Button>
                    </SignedOut>
                </div>
            </div>
        </header>
    );
};
