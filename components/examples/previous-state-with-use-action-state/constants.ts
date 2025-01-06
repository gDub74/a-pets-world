export const USE_PREVIOUS_AS_TEXT = `import { useEffect, useState } from "react";
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

export const USER_NAME_FORM_AS_TEXT = `import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePrevious } from "@/hooks/use-previous";
import { ReactElement, useActionState } from "react";
import { updateUserName } from "./updateUserName";

export const UserNameForm = (): ReactElement => {
    const [userName, formAction, isPending] = useActionState(updateUserName, {
        name: "",
    });

    const previousName = usePrevious(userName);

    return (
        <>
            <form
                action={formAction}
                className="flex flex-col items-start gap-y-2 mt-10 w-f md:w:3/4 lg:w-1/2"
            >
                <p>{userName ? userName : "please enter your name:"}</p>
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
                The last user input was:
                <strong className="ml-2">
                    {typeof previousName === "string"
                        ? previousName
                        : "undefined"}
                </strong>
            </p>
        </>
    );
};
`;
