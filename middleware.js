import { NextResponse } from "next/server";

export function middleware(request) {
    const {cookies } = request; // get the request
    const authCookie = cookies.get('auth'); // get the cookie name from the request

    // check if there is a valid cookie. If not, redirect to login page so user can re-attempt login to generate a valid cookie
    if (authCookie === undefined) {
        return NextResponse.redirect(new URL('/Login', request.url))
    }

    //const authCookieValue = authCookie.value ? authCookie.value : ''

    // check if the request's pathname is the Manage page
    if (request.nextUrl.pathname === '/Manage') {
        // check if the authCookie's value matches what we defined. if not, redirect to login
        if (authCookie.value !== 'authenticated') {
            return NextResponse.redirect(new URL('/Login', request.url));
        }
    }
    // go to the manage page (continue with the default request of /Manage page)
    return NextResponse.next()
}

// apply the middleware to only the Manage page
export const config = {
    matcher: ['/Manage']
}