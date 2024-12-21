import {
    SidebarFooter,
    SidebarGroup,
    SidebarMenuButton,
    SidebarSeparator,
    SidebarState,
} from "../../ui/sidebar";

import {
    Settings,
    IdCard as About,
    ReceiptText,
    ChevronRight,
    AsteriskSquare,
    Ellipsis,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { APWRoutes } from "@/lib/APWRoutes";
import { buildSelectedMenuitemBackgroundColor } from "../util";

import { UserButton } from "./user-button";
import { HeadingTypography } from "@/components/ui/typography/heading";

import {
    CollapsibleContent,
    Collapsible,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";

const footerItems = [
    {
        title: "About",
        pathname: APWRoutes.About.pathname,
        icon: About,
        meta: {
            description:
                "This is the about page for the user to learn more about the application.",
        },
    },
    {
        title: "Terms and Conditions",
        pathname: APWRoutes.TermsAndConditions.pathname,
        icon: ReceiptText,
    },
];

export const AppSidebarFooter = ({ state }: { state: SidebarState }) => {
    const pathname = usePathname();

    return (
        <SidebarFooter className="ml-4 p-2">
            <Collapsible
                className="group/collapsible"
                defaultOpen={state === "expanded"}
            >
                <CollapsibleTrigger className="w-full">
                    <div className="flex items-center w-full text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
                        <Ellipsis />
                        {state === "expanded" ? (
                            <ChevronRight
                                stroke={"hsl(var(--primary))"}
                                className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90"
                            />
                        ) : null}
                    </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4">
                    {state === "expanded" ? (
                        <div className="flex items-center">
                            <Settings size="18" className="mr-2" />

                            <HeadingTypography variant="h6" className="text-sm">
                                {state === "expanded" ? "Settings" : null}
                            </HeadingTypography>
                        </div>
                    ) : null}
                    <SidebarSeparator className="mt-2 ml-[-1rem]" />
                    <SidebarGroup
                        title="User Settings and Profile Management"
                        className={`${state === "collapsed" ? "ml-[-1rem]" : ""}`}
                    >
                        <UserButton sidebarState={state} />
                    </SidebarGroup>

                    {state === "expanded" ? (
                        <div className="flex items-center mt-4">
                            <AsteriskSquare size="18" className="mr-2" />
                            <HeadingTypography variant="h6" className="text-xs">
                                Info
                            </HeadingTypography>
                        </div>
                    ) : null}
                    <SidebarSeparator className="mt-2 ml-[-1rem]" />
                    <SidebarGroup
                        title="About, Terms and Conditions, ect.."
                        className={`${state === "collapsed" ? "ml-[-1rem]" : ""}`}
                    >
                        {footerItems.map((item) => (
                            <SidebarMenuButton
                                key={item.title}
                                asChild
                                className={`[&_svg]:size-4  ${buildSelectedMenuitemBackgroundColor(
                                    pathname,
                                    item.pathname,
                                )}`}
                            >
                                <a href={item.pathname}>
                                    <item.icon className="mr-2" />
                                    <span className="text-xs my-4">
                                        {item.title}
                                    </span>
                                </a>
                            </SidebarMenuButton>
                        ))}
                    </SidebarGroup>
                </CollapsibleContent>
            </Collapsible>

            <div className=" mt-8 flex items-center justify-center">
                <span className="text-[0.625rem]">
                    {"© 2024 A Pet's World"}
                </span>
            </div>
        </SidebarFooter>
    );
};
