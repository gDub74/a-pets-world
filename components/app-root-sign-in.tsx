"use client";

import { SignInButton } from "@clerk/nextjs";
import { ReactElement, ReactNode } from "react";
import { Button } from "./ui/button";

const SignedOutWelcomeMessage = (): ReactElement => {
    return (
        <div className="items-center justify-items-center p-10">
            <h1 className="my-8">
                Welcome to A Pet's World, we're so happy you stopped by!
            </h1>
            <h2 className="my-2">
                Sign in to find and follow all of your favorite pets.
            </h2>
        </div>
    );
};

export const AppRootSignIn = (): ReactElement => (
    <div className="flex flex-col justify-center items-center h-screen">
        <SignedOutWelcomeMessage />
        <SignInButton mode="modal">
            {/* Wrapping our own button is the suggested way of styling the unstyled SignInButton component from Clark. */}
            <Button>Sign In</Button>
        </SignInButton>
    </div>
);
