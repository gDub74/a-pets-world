"use server";

import { UserNameFormData } from "./types";

export const updateUserName = async (
    _: unknown,
    payload: FormData,
): Promise<UserNameFormData> => {
    // delay to simulate async action
    await new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });

    const data = Object.fromEntries(payload.entries()) as UserNameFormData;
    // Logs on the server because this is a server action
    console.info("form data using Object.fromEntries: ", data);

    return data;
};
