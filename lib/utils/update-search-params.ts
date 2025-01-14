"use client";

import { ReadonlyURLSearchParams } from "next/navigation";
import { NextRouter } from "next/router";

/** Updates search params with next/router's router.replace. We inject router and currentSearchParams in order to use this function in scenarios where a React custom hook is not able to be used. */
export const updateSearchParams = (
    currentSearchParams: ReadonlyURLSearchParams,
    updates: Record<string, string>,
    router: NextRouter,
): void => {
    const newParams = new URLSearchParams(currentSearchParams.toString());

    Object.entries(updates).forEach(([key, value]) => {
        newParams.set(key, value);
    });

    router.replace({ search: newParams.toString() });
};
