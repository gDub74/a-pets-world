import { ReactElement } from "react";
import {
    Home,
    Inbox,
    Search,
    Settings,
    ChartNoAxesColumn as Dashboard,
    HeartHandshake as Adopt,
    SquareUserRound as Profile,
    Bell as Notifications,
    Store as Marketplace,
} from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
    {
        title: "Home",
        url: "#",
        icon: Home,
    },
    {
        title: "Adopt",
        url: "#",
        icon: Adopt,
    },
    {
        title: "Notifications",
        url: "#",
        icon: Notifications,
    },
    {
        title: "Messages",
        url: "#",
        icon: Inbox,
    },
    {
        title: "Search",
        url: "#",
        icon: Search,
    },
    {
        title: "Dashboard",
        url: "#",
        icon: Dashboard,
    },
    {
        title: "Profile",
        url: "#",
        icon: Profile,
    },
    {
        title: "Marketplace",
        url: "#",
        icon: Marketplace,
    },
];

const footerItems = [
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
];

export const AppSidebar = (): ReactElement => (
    <Sidebar>
        <SidebarContent className="h-full p-4">
            <SidebarGroup className="h-full">
                <SidebarGroupLabel className="h-16 text-base font-bold mb-12">
                    {/* TODO: Replace with svg logo */}
                    {"A Pet's World"}
                </SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu className="gap-6">
                        {items.map((item) => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton
                                    asChild
                                    className="[&_svg]:size-6"
                                >
                                    <a href={item.url}>
                                        <item.icon className="mr-2" />
                                        <span className="text-base my-12 font-semibold">
                                            {item.title}
                                        </span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="p-8">
            {footerItems.map((item) => (
                <SidebarMenuButton asChild className="[&_svg]:size-6">
                    <a href={item.url}>
                        <item.icon className="mr-2" />
                        <span className="text-base my-8 font-semibold">
                            {item.title}
                        </span>
                    </a>
                </SidebarMenuButton>
            ))}
            <div className="h-8 mt-4 flex items-center justify-center">
                <span className="text-xs">{"© 2024 A Pet's World"}</span>
            </div>
        </SidebarFooter>
    </Sidebar>
);
