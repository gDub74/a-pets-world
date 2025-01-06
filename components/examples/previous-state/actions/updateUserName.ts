"use server";

type UpdateUserNameFormData = {
    name: string;
};

export const updateUserName = async (currentState, formData) => {
    console.log("currentState", currentState);
    // delay to simulate async action
    const newUserName = formData.get("name");

    await new Promise((resolve) => {
        setTimeout(resolve, 2000);
    });
    return newUserName;
};
