import { PageLayout } from "@/components/app-page-layout";

export default function FunWithReactHooksLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <PageLayout>{children}</PageLayout>;
}
