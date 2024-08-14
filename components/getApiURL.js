export function getApiURL() {
    const production = process.env.NODE_ENV === 'production'
    return production ? 'https://davieloria.vercel.app/api/' : 'http://localhost:3000/api/'
}

