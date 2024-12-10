import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** cn, which is short for the className convention in shadcn, is used to merge className and className from props in a component */
export const cn = (...inputs: ClassValue[]): string => {
    return twMerge(clsx(inputs));
};
