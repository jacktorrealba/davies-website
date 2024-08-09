import {NextResponse} from 'next/server';

// post method for getting the environment variable
export async function POST(request) {
    // get the password from the body 
    const { password } = await request.json();
    // get the password stored in the environment variable
    const storedPassword = process.env.PROTECTED_PAGE_PASSWORD

    // validate that we have a password to begin with
    if (!password || !storedPassword) {
        return NextResponse.json({ message: 'Missing passcode'} , {status: 400});
    }

    // validate that the password from the body matches the stored password in the environment variable
    if (password === storedPassword) {
        // set new headers and the cookie
        const headers = new Headers();
        headers.set('Set-Cookie', `auth=authenticated; Path=/; HttpOnly; Max-Age=86400`); // give a max age of 1 day (in seconds)
        return NextResponse.json({message: 'Authenticated'} , {headers}); // return authenticated headers
    } else {
        return NextResponse.json({message: 'Invalid passcode'}, {status: 401})
    }
}