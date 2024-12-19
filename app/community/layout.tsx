import { PageLayout } from "@/components/app-page-layout";

export default function CommunityLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <PageLayout>{children}</PageLayout>;
}
