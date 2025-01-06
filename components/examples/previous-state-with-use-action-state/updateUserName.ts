"use server";

import { UserNameFormData } from "./types";

export const updateUserName = async (
    _: UserNameFormData,
    payload: FormData,
): Promise<UserNameFormData> => {
    // delay to simulate async action
    await new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });

    const newUserName = payload.get("name") as string;

    return { name: newUserName };
};
