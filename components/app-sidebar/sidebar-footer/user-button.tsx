"use client";

import { Button } from "@/components/ui/button";
import { SidebarState } from "@/components/ui/sidebar";
import {
    SignInButton,
    useUser,
    UserButton as UserAvatarButton,
} from "@clerk/nextjs";

export const UserButton = ({
    sidebarState,
}: {
    sidebarState: SidebarState;
}) => {
    const { isLoaded, user } = useUser();

    if (!isLoaded) return null;

    if (!user?.id)
        return (
            <SignInButton mode="modal">
                <Button>Sign In</Button>
            </SignInButton>
        );

    return (
        <div className="flex items-center pl-1 mt-2">
            <span className="mr-3 mt-1">
                <UserAvatarButton />
            </span>
            {sidebarState === "expanded" ? (
                <div>
                    <span className="block text-sm font-semibold">
                        {user.fullName}
                    </span>
                    <span className="block text-xs text-text-secondary">
                        online
                    </span>
                </div>
            ) : null}
        </div>
    );
};
