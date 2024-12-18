import { useState } from "react";
import { SidebarFooter, SidebarMenuButton, SidebarState } from "../ui/sidebar";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import {
    ChevronsUpDown,
    ListCollapse,
    Settings,
    IdCard as About,
} from "lucide-react";

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
    {
        title: "About",
        url: "#",
        icon: About,
        meta: {
            description:
                "This is the about page for the user to learn more about the application.",
        },
    },
];

export const AppSidebarFooter = ({ state }: { state: SidebarState }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <SidebarFooter className="ml-4">
            <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                <CollapsibleTrigger asChild>
                    <SidebarMenuButton
                        onClick={() => setIsOpen((prev) => !prev)}
                        className="flex mb-4"
                    >
                        <span className="sr-only">Toggle</span>
                        {state === "expanded" ? (
                            <div className="flex w-full pr-4 py-4">
                                <ListCollapse size="18" />
                                <ChevronsUpDown className="h-4 w-4 ml-auto" />
                            </div>
                        ) : (
                            <ChevronsUpDown className="h-4 w-4" />
                        )}
                    </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                    {footerItems.map((item) => (
                        <SidebarMenuButton
                            key={item.title}
                            asChild
                            className="[&_svg]:size-4"
                        >
                            <a href={item.url}>
                                <item.icon className="mr-2" />
                                <span className="text-sm my-8">
                                    {item.title}
                                </span>
                            </a>
                        </SidebarMenuButton>
                    ))}
                </CollapsibleContent>
                <div className=" mt-8 flex items-center justify-center">
                    <span className="text-[0.625rem]">
                        {"© 2024 A Pet's World"}
                    </span>
                </div>
            </Collapsible>
        </SidebarFooter>
    );
};
