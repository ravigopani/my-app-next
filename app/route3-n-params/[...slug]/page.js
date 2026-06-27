import { notFound } from 'next/navigation';

export default async function Features({ params }) {
    const { slug } = await params;

    if (slug.length === 1) {
        notFound();
    } else {
        return <div>Params: {slug.join('/')}</div>;
    }
}