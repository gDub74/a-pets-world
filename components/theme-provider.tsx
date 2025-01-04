"use client";

import { ComponentProps, useEffect, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
    children,
    ...props
}: ComponentProps<typeof NextThemesProvider>) {
    /**
     *  This silliness is a suggested solution to prevent Hydration issue since the theme is not available on the server.
     *  https://nextjs.org/docs/messages/react-hydration-error#solution-1-using-useeffect-to-run-on-the-client-only
     * **/
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
