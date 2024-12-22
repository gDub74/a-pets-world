"use client";

import { ReactElement } from "react";
import {
    Newspaper as Feed,
    Inbox,
    Activity as Social,
    ChartNoAxesColumn as Dashboard,
    HeartHandshake as Adopt,
    SquareUserRound as Profile,
    Bell as Notifications,
    Blend as Community,
    BookHeart as Favorites,
    Store,
} from "lucide-react";
import pluralize from "pluralize";

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarSeparator,
    useSidebar,
} from "@/components/ui/sidebar";
import { Badge } from "../ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";
import { Separator } from "../ui/separator";
import { APWRoutes } from "@/lib/APWRoutes";
import { AppSidebarFooter } from "./sidebar-footer";
import { usePathname } from "next/navigation";
import { buildSelectedMenuitemBackgroundColor } from "./util";

/** These menu items will be available in a logged-out experience */
const publicMenuItems = [
    {
        title: "Adopt",
        pathname: APWRoutes.Adopt.pathname,
        icon: Adopt,
        meta: {
            description:
                "This is the adoption page for the user to see the pets available for adoption via Pet Finder API.",
        },
    },
    {
        title: "Dashboard",
        pathname: APWRoutes.Dashboard.pathname,
        icon: Dashboard,
        meta: {
            description:
                "This is the dashboard page for the user to see pet based charts and data visualizations, trending hashtags.",
        },
    },
    {
        title: "Community",
        pathname: APWRoutes.Community.pathname,
        icon: Community,
        meta: {
            description:
                "This is the community feed for the user to see and comment on community specific posts -- based on location/city posts and updates.",
        },
    },
    {
        title: "Shop",
        pathname: APWRoutes.Shop.pathname,
        icon: Store,
    },
];

/** These menu items will only be available in a logged-in experience */
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
            pathname: APWRoutes.Profile.pathname,
            icon: Profile,
            meta: {
                description:
                    "This is the profile page for the user to see their profile information and view and create their posts.",
            },
        },
        {
            title: "Feed",
            pathname: APWRoutes.Feed.pathname,
            icon: Feed,
            meta: {
                description:
                    "This is the home page feed for the user to see the latest updates and posts from the community.",
            },
        },
        {
            title: "Favorites",
            pathname: APWRoutes.Favorites.pathname,
            icon: Favorites,
            meta: {
                description:
                    "This is the favorites page for the user to see their favorite pets from the adoption page. This view will require a logged in experience.",
            },
        },
        // {
        //     title: "Messages",
        //     pathname: APWRoutes.Messages.pathname,
        //     icon: Inbox,
        //     meta: {
        //         description:
        //             "This is the messages page for the user to see their direct private messages.",
        //         count: 1, // this will need to be dynamic
        //     },
        // },
        {
            title: "Notifications",
            pathname: APWRoutes.Notifications.pathname,
            icon: Notifications,
            meta: {
                description:
                    "This is the notifications page for the user to see their notifications.",
                count: 13, // this will need to be dynamic
            },
        },
    ],
};

/**
 * The AppSidebar component is the main sidebar for the application. It will contain the main navigation for the application.
 * This sidebar is be collapsible down to Icons and has a footer with additional links.
 */
export const AppSidebar = (): ReactElement => {
    const pathname = usePathname();
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
                                        title={item.title}
                                        className={`[&_svg]:size-6
                                        ${buildSelectedMenuitemBackgroundColor(
                                            pathname,
                                            item.pathname,
                                        )}
                                            `}
                                    >
                                        <a href={item.pathname}>
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
                                        title={item.title}
                                        className={`[&_svg]:size-6
                                        ${buildSelectedMenuitemBackgroundColor(
                                            pathname,
                                            item.pathname,
                                        )}
                                            `}
                                    >
                                        <a href={item.pathname}>
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
                                                    <Badge
                                                        variant="notify"
                                                        className="top-0.5"
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
                                            </span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarSeparator className="mt-2" />
            <AppSidebarFooter state={state} />
        </Sidebar>
    );
};
