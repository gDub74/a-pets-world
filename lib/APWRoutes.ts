export class APWRoutes {
    // static Search = {
    //     build: (query?: string | null, type?: SearchType | null) => ({
    //         pathname: StorefrontRoute.Search.pathname,
    //         query: {
    //             query: query ?? "",
    //             type: type ?? "",
    //         },
    //     }),
    //     pathname: "/search",
    // };

    static Dashboard = {
        build: (query: string) => ({
            pathname: `/dashboard/${query}`,
        }),
        pathname: "/dashboard",
    };

    static Adopt = {
        pathname: "/",
    };
}
