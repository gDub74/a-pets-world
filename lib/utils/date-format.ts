export enum MonthFormat {
    Numeric = "numeric",
    TwoDigit = "2-digit",
    Long = "long",
    Short = "short",
    Narrow = "narrow",
}

const DAY_AND_YEAR_FORMAT = MonthFormat.Numeric;

/**
 *
 * @param dateString a Date string in ISO format
 * @param locale defaults to "en-US", but you can provide a users locale by using window.navigator.language
 * @param monthFormat defaults to "long" but can be "numeric", "2-digit", "long", "short", or "narrow"
 * @returns
 */
export const formatDateStringToLocaleString = (
    dateString: string,
    locale?: string,
    monthFormat?: MonthFormat,
): string =>
    new Date(dateString).toLocaleString(locale ?? "en-US", {
        month: `${monthFormat ?? MonthFormat.Long}`,
        day: DAY_AND_YEAR_FORMAT,
        year: DAY_AND_YEAR_FORMAT,
    });
