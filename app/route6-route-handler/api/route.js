import { NextRequest, NextResponse } from 'next/server';
import { headers, cookies } from 'next/headers';
import { redirect } from 'next/navigation';

// export async function GET(request) {
//     // return new Response('Hello, world!');
//     // console.log('GET requesttt', request);

//     const searchParams = request.nextUrl.searchParams;
//     const param1 = searchParams.get('param1');
//     console.log('param1', param1);

//     // const requestHeaders = request.headers;
//     const requestHeaders = await headers();
//     console.log('requestHeaders', requestHeaders.get('Authorization'));

//     const responseHeaders = new Headers();
//     responseHeaders.set('Content-Type', 'application/json');
//     responseHeaders.set('X-Custom-Header', 'Hello, world!');

//     // first method to set/get cookies
//     responseHeaders.set('Set-Cookie', 'theme1=dark');
//     responseHeaders.set('Set-Cookie', 'cookie1=1234567890');
//     responseHeaders.set('Set-Cookie', 'token=1234567890; HttpOnly; Secure; SameSite=Strict');

//     // const cookies = request.cookies;
//     console.log('cookies', request.cookies.get('theme1'));
//     console.log('cookies', request.cookies.get('cookie1'));
//     console.log('cookies', request.cookies.get('token'));

//     // second method to set/get cookies
//     const cookieStore = await cookies();
//     cookieStore.set('theme2', 'light');
//     console.log('cookieStore', cookieStore.get('theme2'));

//     return Response.json({ message: 'Hello, world!' }, { headers: responseHeaders });
//     // redirect('/route1');
// }

// GET only be cached, other methods will not be cached
// won't work on dynamic function like headers, cookies, etc.
// work in production build only not in development
// export const dynamic = 'force-dynamic';
export const dynamic = "force-static";
export const revalidate = 10;
export async function GET() {
    return Response.json({ time: new Date().toLocaleTimeString() });
}

// export async function POST(request) {az
//     const body = await request.json();
//     return Response.json(body);
// }

// export async function PUT(request) {
//     const body = await request.json();
//     return Response.json(body);
// }

// export async function DELETE(request) {
//     const body = await request.json();
//     return Response.json(body);
// }