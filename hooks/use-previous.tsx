import { useEffect, useState } from "react";

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
};
