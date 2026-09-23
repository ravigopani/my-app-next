/* this component is Server Component */

/* if cookies or any other things found then it will become dynamically render comp. */
/* other wise it will be statically render comp. */
import { cookies } from 'next/headers';
import Link from 'next/link';

export default async function Route7RenderingPage() {
    const cookieStore = await cookies();
    const name = cookieStore.get('name')?.value || 'Guest';

    return <div>
        <h1>Route7 Rendering Page</h1>
        <h1>Name from cookie: {name}</h1>
        <Link href="/route7_1-rendering">Go to route7_1-rendering</Link>
    </div>;
}