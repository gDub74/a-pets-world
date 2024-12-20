import {
    SidebarFooter,
    SidebarMenuButton,
    SidebarState,
} from "../../ui/sidebar";

import { Settings, IdCard as About } from "lucide-react";
import { usePathname } from "next/navigation";
import { APWRoutes } from "@/lib/APWRoutes";
import { buildSelectedMenuitemBackgroundColor } from "../util";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../../ui/dropdown-menu";

import { AvatarSignInButton } from "./avatar-sign-in-button";
import { DropdownMenuArrow } from "@radix-ui/react-dropdown-menu";
import { ModeToggleButton } from "@/components/app-header/mode-toggle-button";
import { Button } from "@/components/ui/button";
import { UserButton } from "./user-button";

const footerItems = [
    // {
    //     title: "Settings",
    //     pathname: APWRoutes.Settings.pathname,
    //     icon: Settings,
    //     meta: {
    //         description:
    //             "This is the settings page for the user to manage their account settings.",
    //     },
    // },
    {
        title: "About",
        pathname: APWRoutes.About.pathname,
        icon: About,
        meta: {
            description:
                "This is the about page for the user to learn more about the application.",
        },
    },
];

export const AppSidebarFooter = ({ state }: { state: SidebarState }) => {
    const pathname = usePathname();

    return (
        <SidebarFooter className="ml-4">
            <div className="flex items-center">
                <Settings size="18" className="mr-2" />

                {state === "expanded" ? "Settings" : null}
            </div>
            <UserButton />
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
                        <span className="text-sm my-8">{item.title}</span>
                    </a>
                </SidebarMenuButton>
            ))}

            <div className=" mt-8 flex items-center justify-center">
                <span className="text-[0.625rem]">
                    {"© 2024 A Pet's World"}
                </span>
            </div>
        </SidebarFooter>
    );
};
