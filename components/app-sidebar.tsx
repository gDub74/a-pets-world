"use client";

import { ReactElement } from "react";
import {
    Newspaper as Feed,
    Inbox,
    Activity as Social,
    Settings,
    ChartNoAxesColumn as Dashboard,
    HeartHandshake as Adopt,
    SquareUserRound as Profile,
    Bell as Notifications,
    Store as Marketplace,
    Blend as Community,
} from "lucide-react";
import pluralize from "pluralize";

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
    useSidebar,
} from "@/components/ui/sidebar";
import { Badge } from "./ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";
import { Separator } from "./ui/separator";

const publicMenuItems = [
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
        title: "Dashboard",
        url: "#",
        icon: Dashboard,
        meta: {
            description:
                "This is the dashboard page for the user to see pet based charts and data visualizations, trending hashtags.",
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

const socialAccountItems = {
    title: "Social",
    url: "#",
    icon: Social,
    meta: {
        description:
            "This is the parent for all social media pages. Social Media requires a user to be signed in.",
    },
    children: [
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
            title: "Feed",
            url: "#",
            icon: Feed,
            meta: {
                description:
                    "This is the home page feed for the user to see the latest updates and posts from the community.",
            },
        },
        {
            title: "Community",
            url: "#",
            icon: Community,
            meta: {
                description:
                    "This is the community feed for the user to see and comment on community specific posts -- based on location/city posts and updates.",
            },
        },
        {
            title: "Notifications",
            url: "#",
            icon: Notifications,
            meta: {
                description:
                    "This is the notifications page for the user to see their notifications.",
                count: 13, // this will need to be dynamic
            },
        },

        {
            title: "Messages",
            url: "#",
            icon: Inbox,
            meta: {
                description:
                    "This is the messages page for the user to see their direct private messages.",
                count: 1, // this will need to be dynamic
            },
        },
    ],
};

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

export const AppSidebar = (): ReactElement => {
    const isMobile = useIsMobile();
    const { state } = useSidebar();

    return (
        <Sidebar collapsible={`${isMobile ? "offcanvas" : "icon"}`}>
            <SidebarContent className="h-full p-3">
                <SidebarGroup>
                    <SidebarGroupLabel className="h-16 text-base font-bold mb-8">
                        {"A Pet's World"}
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu className="gap-6 mb-8">
                            {publicMenuItems.map((item) => (
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
                <Separator className="my-4" />
                <SidebarGroup>
                    <SidebarGroupLabel className="h-12 text-sm font-bold mb-4 ">
                        {socialAccountItems.title}
                        <span className="ml-2">
                            <socialAccountItems.icon size="20" />
                        </span>
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu className="gap-6">
                            {socialAccountItems.children.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        asChild
                                        className="[&_svg]:size-6"
                                    >
                                        <a href={item.url}>
                                            <item.icon className="mr-2" />
                                            {state === "collapsed" &&
                                            item?.meta?.count ? (
                                                <Badge
                                                    variant="notify"
                                                    className="left-0.5"
                                                >
                                                    {item.meta.count}
                                                    <span className="sr-only">
                                                        {pluralize(
                                                            "notification",
                                                            item.meta.count,
                                                            true,
                                                        )}
                                                    </span>
                                                </Badge>
                                            ) : null}
                                            <span className="text-base my-12 font-semibold">
                                                {item.title}
                                                {state === "expanded" &&
                                                item?.meta?.count ? (
                                                    <Badge variant="notify">
                                                        {item.meta.count}
                                                        <span className="sr-only">
                                                            {pluralize(
                                                                "notification",
                                                                item.meta.count,
                                                                true,
                                                            )}
                                                        </span>
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
                    <SidebarMenuButton
                        key={item.title}
                        asChild
                        className="[&_svg]:size-6"
                    >
                        <a href={item.url}>
                            <item.icon className="mr-2" />
                            <span className="text-base my-8 font-semibold">
                                {item.title}
                            </span>
                        </a>
                    </SidebarMenuButton>
                ))}
                <div className=" mt-8 flex items-center justify-center">
                    <span className="text-[0.625rem]">
                        {"© 2024 A Pet's World"}
                    </span>
                </div>
            </SidebarFooter>
        </Sidebar>
    );
};
