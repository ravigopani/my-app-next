import { NextRequest, NextResponse } from 'next/server';

/** @param {NextRequest} request */
export function middleware(request) {
    console.log('middleware is running', request.nextUrl.pathname);
    
    const response = NextResponse.next();
    const themePreference = response.cookies.get('custom-theme');
    if (!themePreference) {
        console.log('themePreference not found, setting theme to light');
        response.cookies.set('custom-theme', 'light');
    }

    response.headers.set('custom-header', 'custom-value');

    if (request.nextUrl.pathname === '/ir4') {
        return NextResponse.redirect(new URL('/hello', request.nextUrl));
    }

    // return NextResponse.redirect(new URL('/', request.url));
    return NextResponse.next();
}

export const config = {
    matcher: '/route4-intercepted-routes',
};
