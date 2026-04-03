import PageTransition from "@/components/PageTransition";
import type { ReactNode } from "react";

export default function Template({ children }: { children: ReactNode }) {
    return <PageTransition>{children}</PageTransition>;
}
