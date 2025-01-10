"use client";

import { ReactElement } from "react";
import { CodeBlock } from "react-code-blocks";
import { USE_PREVIOUS_AS_TEXT, USER_NAME_FORM_AS_TEXT } from "./constants";
import { UserNameForm } from "./userNameForm";

export const PreviousStateExampleWithUseActionState = (): ReactElement => (
    <div className="flex flex-col gap-y-2 items-center w-full">
        <p className="text-secondary-foreground">
            Here we are using the React hook useActionState hook to manage the
            state of the form. We are also using the usePrevious custom hook to
            keep track of the previous state of the userName.
        </p>
        <div className="p-2 sm:p-4 md:p8 lg:p-16">
            <CodeBlock
                text={USE_PREVIOUS_AS_TEXT}
                language={"typescript"}
                showLineNumbers={true}
                wrapLongLines={true}
            />
        </div>
        <UserNameForm />
        <div className="p-2 sm:p-4 md:p8 lg:p-16">
            <CodeBlock
                text={USER_NAME_FORM_AS_TEXT}
                language={"typescript"}
                showLineNumbers={true}
                wrapLongLines={true}
            />
        </div>
    </div>
);
