import { PageLayout } from "@/components/app-page-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Community | A Pet's World",
    description:
        "This is the community feed for A Pet's World users to see and comment on community specific public posts -- based on location/city posts and updates.",
};

export default function CommunityLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <PageLayout>{children}</PageLayout>;
}
