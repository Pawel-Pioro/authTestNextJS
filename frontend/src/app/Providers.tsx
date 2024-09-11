"use client"; // This marks the file as a Client Component

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface SessionWrapperProps {
    children: ReactNode;
}

export default function SessionWrapper({ children }: SessionWrapperProps) {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    );
}
