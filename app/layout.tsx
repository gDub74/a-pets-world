import type { Metadata } from "next";
import localFont from "next/font/local";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

import { AppHeader } from "@/components/app-header";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "A Pet's World",
    description:
        "Pet Finder type Adoption With A Pet Based Social Media Twist and Historical Pet Adoption Data",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
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
