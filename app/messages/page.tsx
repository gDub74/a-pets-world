"use client";

import { AppSignIn } from "@/components/app-sign-in";
import { HeadingTypography } from "@/components/typography/heading";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function Favorites() {
    return (
        <>
            <SignedOut>
                <AppSignIn
                    message={
                        <div className="items-center justify-items-center p-10">
                            <h1 className="text-xl my-2">
                                {
                                    "Sign in to read and send messages to your friends and followers."
                                }
                            </h1>
                        </div>
                    }
                />
            </SignedOut>
            <SignedIn>
                <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                    <HeadingTypography>
                        {
                            "Coming soon! This is where you wll read and send messages to your friends and followers."
                        }
                    </HeadingTypography>
                </div>
            </SignedIn>
        </>
    );
}