import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const hostname = req.headers.get('host') || '';
  const mainDomain = process.env.NEXT_PUBLIC_MAIN_DOMAIN || 'basecamp420.com';

  let currentHost = hostname.replace(`.${mainDomain}`, '').replace('.localhost:3000', '');

  // Si es la página principal matriz
  if (currentHost === mainDomain || currentHost === 'localhost:3000' || currentHost === 'www') {
    return NextResponse.next();
  }

  // Redirige internamente a los minisitios sin cambiar la URL del usuario
  url.pathname = `/_tenants/${currentHost}${url.pathname}`;
  return NextResponse.rewrite(url);
}
