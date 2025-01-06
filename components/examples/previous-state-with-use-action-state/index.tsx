"use client";

import { updateUserName } from "@/components/examples/previous-state-with-use-action-state/updateUserName";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePrevious } from "@/hooks/use-previous";

import { ReactElement, useActionState } from "react";
import { CodeBlock } from "react-code-blocks";

const usePreviousText = `import { useEffect, useState } from "react";
/**
 *
 * @param value - any value you that you want to keep track of its previous value as it changes
 * @returns the previous value of the input value
 */
export const usePrevious = <T,>(value: T): T | undefined => {
    const [previous, setPrevious] = useState<T | undefined>(undefined);
    useEffect(() => {
        return () => {
            setPrevious(value);
        };
    }, [value]);
    return previous;
};`;

export const PreviousStateExampleWithUseActionState = (): ReactElement => {
    const [userName, formAction, isPending] = useActionState(updateUserName, {
        name: "",
    });

    const previousName = usePrevious(userName);

    return (
        <div className="flex flex-col gap-y-2 items-center w-full">
            <p className="text-secondary-foreground">
                Here we are using the React hook useActionState hook to manage
                the state of the form. We are also using the usePrevious custom
                hook to keep track of the previous state of the userName.
            </p>
            <div className="p-2 sm:p-4 md:p8 lg:p-16">
                <CodeBlock
                    text={usePreviousText}
                    language={"typescript"}
                    showLineNumbers={true}
                    wrapLongLines={true}
                />
            </div>

            <form
                action={formAction}
                className="flex flex-col items-start gap-y-2 mt-10 md:w:3/4 lg:w-1/2"
            >
                <p>{`Welcome ${typeof userName === "string" ? userName : "please enter your name:"}`}</p>
                <Input name="name" placeholder="Enter new name" />
                <Button
                    type="submit"
                    disabled={isPending}
                    className="py-2 px-3"
                >
                    Submit
                </Button>
            </form>

            <p>
                The last user input was:{" "}
                <strong>
                    {typeof previousName === "string"
                        ? previousName
                        : "undefined"}
                </strong>
            </p>
        </div>
    );
};
