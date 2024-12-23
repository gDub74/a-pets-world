export class APWRoutes {
    static About = {
        pathname: "/about",
    };

    static Adopt = {
        pathname: "/",
    };

    static Community = {
        pathname: "/community",
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

    static Profile = {
        pathname: "/profile",
    };

    static SignIn = {
        pathname: "/sign-in",
    };

    static SignUp = {
        pathname: "/sign-up",
    };
}
