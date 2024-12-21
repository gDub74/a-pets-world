"use client";

import { HeadingTypography } from "@/components/ui/typography/heading";

export default function Favorites() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <HeadingTypography>
                {
                    "Coming soon! This is where you wll read and send messages to your friends and followers."
                }
            </HeadingTypography>
        </div>
    );
}
