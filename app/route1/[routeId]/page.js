import { notFound } from 'next/navigation';

/* metadata is not supported in dynamic routes */
// export const metadata = {
//     title: 'Route 1 Page with [routeId]',
//     description: 'Route 1 Page Description with [routeId]',
// }

export async function generateMetadata({ params }) {
    const { routeId } = await params;
    if (routeId > 100) {
        notFound();
    }
    return {
        title: `Route ${routeId}`,
        description: `Route description ${routeId}`,
    };
}

export default async function Route1Page({ params, searchParams }) {
    const paramsData = await params;
    const searchParamsData = await searchParams;

    if (paramsData.routeId === '3') {
        notFound();
    }


    return (
        <div>
            <h3>Route 1 Page with [{paramsData.routeId}]</h3>
            <h3>Search Params: [{searchParamsData.lang}]</h3>
            {Object.entries(searchParamsData).map(([key, value]) => (
                <div key={key}>
                    {key}: {value}
                </div>
            ))}
        </div>
    );
}