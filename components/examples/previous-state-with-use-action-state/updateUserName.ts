"use server";

type UpdateUserNameFormData = {
    name: string;
};

export const updateUserName = async (currentState, formData) => {
    console.log("currentState", currentState);
    const newUserName = formData.get("name");

    // delay to simulate async action
    await new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });
    return newUserName;
};
