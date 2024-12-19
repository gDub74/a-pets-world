import { PageLayout } from "@/components/app-page-layout";

export default function FeedLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <PageLayout>{children}</PageLayout>;
}
