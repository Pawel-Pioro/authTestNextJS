import NextAuth from 'next-auth';

declare module 'next-auth' {
    interface Session {
        accessToken?: string;
    }

    interface User {
        access: string;
        refresh: string;
    }

    interface JWT {
        accessToken: string;
        refreshToken: string;
    }
}
