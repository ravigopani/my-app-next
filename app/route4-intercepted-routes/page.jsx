import Link from 'next/link';
export default function interceptedRoutesPage() {
    return <div>Intercepted Routes Page
        <br />
        <Link href="/route4-intercepted-routes/ir1">Ir1</Link>
        <br />
        <Link href="/ir4">Ir4</Link>
    </div>;
}