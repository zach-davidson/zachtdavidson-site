import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PASSWORD = 'houdini'

export function middleware(request: NextRequest) {
  const authCookie = request.cookies.get('site-auth')
  const isLoginPage = request.nextUrl.pathname === '/login'
  const isApiAuth = request.nextUrl.pathname === '/api/auth'

  // allow login page, auth api, and static assets
  if (isLoginPage || isApiAuth || request.nextUrl.pathname.startsWith('/_next') || request.nextUrl.pathname.startsWith('/og')) {
    return NextResponse.next()
  }

  // check auth
  if (authCookie?.value !== PASSWORD) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
