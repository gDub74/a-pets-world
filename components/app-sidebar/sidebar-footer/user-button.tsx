"use client";

import { Button } from "@/components/ui/button";
import { SignInButton, useUser } from "@clerk/nextjs";

export const UserButton = () => {
    const { isLoaded, user } = useUser();

    if (!isLoaded) return null;

    if (!user?.id)
        return (
            <SignInButton mode="modal">
                <Button>Sign In</Button>
            </SignInButton>
        );

    return <p>signed in...</p>;
};
