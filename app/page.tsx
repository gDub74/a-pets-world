import { HeadingTypography } from "@/components/ui/typography/heading";

export default function Home() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <HeadingTypography>
                {"A Pet's World Coming soon!"}
            </HeadingTypography>
        </div>
    );
}
