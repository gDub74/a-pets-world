import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Mulish } from "next/font/google";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

import { AppHeader } from "@/components/app-header";

const mulish = Mulish({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "A Pet's World",
    description:
        "A Pet oriented social media app with a Pet Finder based type Adoption feature.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
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
                        <main className="w-full">
                            <AppHeader />
                            {children}
                        </main>
                    </SidebarProvider>
                    {/* <footer>
                    <p>Footer Stuff can go here</p>
                </footer> */}
                </ThemeProvider>
            </body>
        </html>
    );
}
