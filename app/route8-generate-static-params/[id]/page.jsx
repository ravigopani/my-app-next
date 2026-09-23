
export default async function Page({ params }) {
    const { id } = await params;
    return <div>Route generate static params : {id}</div>;
}