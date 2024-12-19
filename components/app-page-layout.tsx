import { ReactNode } from "react";

export const PageLayout = ({ children }: { children: ReactNode }) => (
    <div className="p-10">{children}</div>
);
