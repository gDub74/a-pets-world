export class APWRoutes {
    static Adopt = {
        pathname: "/",
    };

    static About = {
        pathname: "/about",
    };

    static Dashboard = {
        build: (query: string) => ({
            pathname: APWRoutes.Dashboard.pathname,
            query: {
                query,
            },
        }),
        pathname: "/dashboard",
    };

    static Favorites = {
        pathname: "/favorites",
    };
}
