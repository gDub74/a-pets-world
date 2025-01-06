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
    ChevronRight,
    ShieldPlus,
    Ellipsis,
    SquareFunction,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { APWRoutes } from "@/lib/APWRoutes";
import { buildSelectedMenuitemBackgroundColor } from "../util";

import { SidebarUserButton } from "./sidebar-user-button";
import { HeadingTypography } from "@/components/ui/typography/heading";

import {
    CollapsibleContent,
    Collapsible,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ModeToggleGroupButton } from "../../mode-button/mode-toggle-group";
import { ModeToggleButton } from "@/components/mode-button/mode-toggle-button";
import Link from "next/link";

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
        title: "React Dev Fun",
        pathname: APWRoutes.ReactHooksFun.pathname,
        icon: SquareFunction,
    },
];

export const AppSidebarFooter = ({ state }: { state: SidebarState }) => {
    const pathname = usePathname();

    return (
        <SidebarFooter className="ml-2 p-2">
            <Collapsible className="group/collapsible" defaultOpen={false}>
                <CollapsibleTrigger
                    title="User settings and additional info"
                    className="flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:w-[2.425rem] group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground h-8 text-sm"
                >
                    <div className="flex items-center w-full text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
                        <Ellipsis />
                        <span className="sr-only">
                            Settings and additional Resources
                        </span>
                        {state === "expanded" ? (
                            <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                        ) : null}
                    </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4 collapsibleContent">
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
                        className={`${state === "collapsed" ? "ml-[-0.25rem]" : ""}`}
                    >
                        <SidebarUserButton sidebarState={state} />
                        {state === "expanded" ? (
                            <div className="inline-flex items-center mt-4">
                                <span
                                    id="toggle-theme"
                                    className="text-xs mr-2"
                                >
                                    Theme:
                                </span>
                                <ModeToggleGroupButton aria-labelledby="toggle-theme" />
                            </div>
                        ) : (
                            <div className="mt-4">
                                <ModeToggleButton hideLabel className="ml-1" />
                            </div>
                        )}
                    </SidebarGroup>

                    {state === "expanded" ? (
                        <div className="flex items-center mt-10">
                            <ShieldPlus size="18" className="mr-2" />
                            <span className="sr-only">
                                Additional Resources
                            </span>
                            <span className="text-xs">Resources</span>
                        </div>
                    ) : null}
                    <SidebarSeparator className="mt-2 ml-[-1rem]" />
                    <SidebarGroup
                        title="About, Terms and Conditions, ect.."
                        className={`${state === "collapsed" ? "ml-[-0.25rem]" : ""}`}
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
                                <Link href={item.pathname}>
                                    <item.icon className="mr-2" />
                                    <span className="text-xs my-4">
                                        {item.title}
                                    </span>
                                </Link>
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
