"use client"
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';

export default function UserInfo() {
    const { data: session } = useSession();

    return (
        <div>
            {session?.user?.name ?
                <>
                    <h1 className="text-3xl font-bold underline">Hello {session?.user?.name}!</h1>
                    <button onClick={() => signOut()}>Sign out</button>
                </>
                :
                <h1 className="text-xl">Sign in <Link className='underline' href='/'>here</Link> or register <Link className='underline' href='/register'>here</Link></h1>
            }
        </div>
    )
}
