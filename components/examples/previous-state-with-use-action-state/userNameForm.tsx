import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePrevious } from "@/hooks/use-previous";
import { ReactElement, useActionState } from "react";
import { updateUserName } from "./updateUserName";

export const UserNameForm = (): ReactElement => {
    const [{ name }, formAction, isPending] = useActionState(updateUserName, {
        name: "",
    });

    const previousName = usePrevious(name);

    return (
        <>
            <form
                action={formAction}
                className="flex flex-col items-start gap-y-2 mt-10 w-f md:w:3/4 lg:w-1/2"
            >
                <p>{`Welcome ${typeof name === "string" ? name : "please enter your name:"}`}</p>
                <Input name="name" placeholder="Enter new name" />
                <Button
                    type="submit"
                    disabled={isPending}
                    className="py-2 px-3 "
                >
                    Submit
                </Button>
            </form>
            <p>
                The last user input was:
                <strong className="ml-2">
                    {typeof previousName === "string" ? previousName : ""}
                </strong>
            </p>
        </>
    );
};
