/* if we need to use in server side, we can use this way */
export default async function Route1AnotherIdPage({ params }) {
    const { routeId, anotherId } = await params;
    return (
        <div>
            <h1>Route 1 Another Id Page</h1>
            <p>Route ID: {routeId}</p>
            <p>Another ID: {anotherId}</p>
        </div>
    );
}

/* if we need to use in client side, we can use this way */
// "use client"
// import { usePathname } from 'next/navigation';

// export default function Route1AnotherIdPage() {
//     const pathname = usePathname();
//     const routeId = pathname.split('/')[2];
//     const anotherId = pathname.split('/')[3];
//     return <div>Route 1 Another Id Page with [{routeId}] and [{anotherId}]</div>;
// }