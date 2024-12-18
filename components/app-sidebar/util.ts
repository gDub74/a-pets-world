export const buildSelectedMenuitemBackgroundColor = (
    pathname: string,
    itemPathname: string | undefined,
): string | undefined =>
    pathname === itemPathname
        ? "bg-gray-200 dark:bg-blue-400 dark:text-stone-950"
        : undefined;
