"use client";

import { updateUserName } from "@/components/examples/previous-state/actions/updateUserName";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePrevious } from "@/hooks/use-previous";
import { ReactElement, useActionState } from "react";

export const PreviousStateExampleWithUseActionState = (): ReactElement => {
    const [userName, formAction, isPending] = useActionState(updateUserName, {
        name: "",
    });

    const previousName = usePrevious(userName);

    return (
        <>
            <form action={formAction} className="flex flex-col gap-y-2">
                <p>{`Welcome ${typeof userName === "string" ? userName : "please enter your name:"}`}</p>
                <Input name="name" placeholder="Enter your name" />
                <Button
                    type="submit"
                    disabled={isPending}
                    className="py-2 px-3"
                >
                    Submit
                </Button>
            </form>
            {previousName && typeof previousName === "string" ? (
                <p>
                    The last user input was: <strong>{previousName}</strong>
                </p>
            ) : null}
        </>
    );
};
