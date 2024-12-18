"use client";

import { SignInButton } from "@clerk/nextjs";
import { ReactElement } from "react";
import { Button } from "./ui/button";
import { HeadingTypography } from "./typography/heading";

const SignedOutWelcomeMessage = (): ReactElement => {
    return (
        <div className="items-center justify-items-center p-10">
            <HeadingTypography variant="h1" className="my-8">
                {"Welcome to A Pet's World, we're so happy you stopped by!"}
            </HeadingTypography>
            <HeadingTypography variant="h2" className="my-2">
                {"Sign in to find and follow all of your favorite pets."}
            </HeadingTypography>
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
