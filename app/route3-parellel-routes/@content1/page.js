import Link from 'next/link';
export default function Route3ParellelRoutesContent1Page() {
    return (
        <div style={{ border: '1px solid red', padding: '10px', margin: '10px' }}>
            <span>@content1 page</span>
            <br/>
            <Link href="/route3-parellel-routes/c1-sub-route">/route3-parellel-routes/c1-sub-route</Link>
        </div>
    );
}