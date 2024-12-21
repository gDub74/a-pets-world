export class APWRoutes {
    static Adopt = {
        pathname: "/",
    };

    static About = {
        pathname: "/about",
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

    static Feed = {
        pathname: "/feed",
    };

    static Messages = {
        pathname: "/messages",
    };

    static Notifications = {
        pathname: "/notifications",
    };

    static Profile = {
        pathname: "/profile",
    };

    static Settings = {
        pathname: "/settings",
    };

    static SignIn = {
        pathname: "/sign-in",
    };

    static SignUp = {
        pathname: "/sign-up",
    };

    static TermsAndConditions = {
        pathname: "/terms-and-conditions",
    };
}
