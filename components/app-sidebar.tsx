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
    Blend as Community,
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
import { Badge } from "./ui/badge";

// Menu items.
const items = [
    {
        title: "Home",
        url: "#",
        icon: Home,
        meta: {
            description:
                "This is the home page feed for the user to see the latest updates and posts from the community.",
        },
    },
    {
        title: "Adopt",
        url: "#",
        icon: Adopt,
        meta: {
            description:
                "This is the adoption page for the user to see the pets available for adoption via Pet Finder API.",
        },
    },
    {
        title: "Notifications",
        url: "#",
        icon: Notifications,
        meta: {
            description:
                "This is the notifications page for the user to see their notifications.",
            count: 13, // this will be dynamic and displayed as a badge
        },
    },
    {
        title: "Messages",
        url: "#",
        icon: Inbox,
        meta: {
            description:
                "This is the messages page for the user to see their direct private messages.",
            count: 1, // this will be dynamic and displayed as a badge
        },
    },
    {
        title: "Search",
        url: "#",
        icon: Search,
        meta: {
            description:
                "This enables the search UI for the user to search for pets, users, and posts.",
        },
    },
    {
        title: "Dashboard",
        url: "#",
        icon: Dashboard,
        meta: {
            description:
                "This is the dashboard page for the user to see pet based charts and data visualizations, trending hashtags.",
        },
    },
    {
        title: "Profile",
        url: "#",
        icon: Profile,
        meta: {
            description:
                "This is the profile page for the user to see their profile information and view and create their posts.",
        },
    },
    {
        title: "Community",
        url: "#",
        icon: Community,
        meta: {
            description:
                "This is the community page for the user to see and comment on community specific posts -- based on location/city posts and updates.",
        },
    },
    {
        title: "Marketplace",
        url: "#",
        icon: Marketplace,
        meta: {
            description:
                "This is the marketplace page for the user to see the products and services available for pets.",
        },
    },
];

const footerItems = [
    {
        title: "Settings",
        url: "#",
        icon: Settings,
        meta: {
            description:
                "This is the settings page for the user to manage their account settings.",
        },
    },
];

export const AppSidebar = (): ReactElement => (
    <Sidebar>
        <SidebarContent className="h-full p-3">
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
                                            {item?.meta?.count ? (
                                                <Badge variant="notify">
                                                    {item.meta.count}
                                                </Badge>
                                            ) : null}
                                        </span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="p-5">
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
