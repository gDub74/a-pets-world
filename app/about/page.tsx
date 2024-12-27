import { HeadingTypography } from "@/components/ui/typography/heading";

export default function About() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <HeadingTypography>
                {
                    "A Pet's World is a place where you can find your next pet, learn about pet care, and connect with other pet lovers."
                }
            </HeadingTypography>
        </div>
    );
}
