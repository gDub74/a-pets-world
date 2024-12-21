import { PageLayout } from "@/components/app-page-layout";

export default function SignUpLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <PageLayout className="flex items-center justify-center">
            {children}
        </PageLayout>
    );
}