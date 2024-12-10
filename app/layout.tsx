import type { Metadata } from "next";
import localFont from "next/font/local";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

import { ModeToggleButton } from "@/components/app-header/mode-toggle-button";

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
                    {/* <AppHeader /> */}
                    <SidebarProvider>
                        <AppSidebar />
                        <main className="w-full">
                            <div className="sticky top-0 z-50 w-full flex items-center">
                                <SidebarTrigger />
                                <span className="ml-auto">
                                    <ModeToggleButton />
                                </span>
                            </div>

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
