"use client";

import { AppSignIn } from "@/components/app-sign-in";
import { HeadingTypography } from "@/components/typography/heading";

import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function Community() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <HeadingTypography>
                {
                    "Coming soon! This is where you will find your location-based community social feed."
                }
            </HeadingTypography>
        </div>
    );
}
