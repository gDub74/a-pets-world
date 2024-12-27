import { HeadingTypography } from "@/components/ui/typography/heading";

export default function Community() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <HeadingTypography>
                {
                    "Coming soon! This is where you will find your community social feed. See public profiles, their public posts, adoptable adorable pets that have been favorited, users offering services, and more!"
                }
            </HeadingTypography>
        </div>
    );
}
