"use client";

import { AppSignIn } from "@/components/app-sign-in";
import { HeadingTypography } from "@/components/ui/typography/heading";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function Profile() {
    return (
        <>
            {/* <SignedOut>
                <AppSignIn
                    message={
                        <div className="items-center justify-items-center p-10">
                            <h1 className="text-xl my-2">
                                {
                                    "Sign in to see view and update your profile or create a new post of your favorite pet pic!"
                                }
                            </h1>
                        </div>
                    }
                />
            </SignedOut>
            <SignedIn> */}
            <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                <HeadingTypography>
                    {
                        "Coming soon! This is where you wll access your pet loving profile."
                    }
                </HeadingTypography>
            </div>
            {/* </SignedIn> */}
        </>
    );
}
