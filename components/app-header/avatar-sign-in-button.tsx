import { SignedOut, SignInButton } from "@clerk/nextjs";
import { CircleUser } from "lucide-react";
import { ReactElement } from "react";

export const AvatarSignInButton = (): ReactElement => (
    <SignedOut>
        <SignInButton mode="modal">
            <CircleUser
                color={"hsl(var(--primary))"}
                className="w-8 h-8 p-1.5 hover:bg-accent hover:text-accent-foreground rounded-md cursor-pointer"
            />
        </SignInButton>
        <span className="sr-only">Sign in</span>
    </SignedOut>
);
