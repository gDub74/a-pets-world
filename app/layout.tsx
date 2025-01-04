import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

import { AppHeader } from "@/components/app-header";

const mulish = Mulish({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "A Pet's World",
    description:
        "A Pet oriented social media app with a Pet Finder based Adoption feature.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider
            publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
            signInUrl="/sign-in"
            signUpUrl="/sign-up"
        >
            <html lang="en">
                <body className={`${mulish.className} antialiased`}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <SidebarProvider>
                            <AppSidebar />
                            <main className="w-full min-h-screen">
                                <AppHeader />
                                {children}
                            </main>
                        </SidebarProvider>
                    </ThemeProvider>
                </body>
            </html>
        </ClerkProvider>
    );
}
