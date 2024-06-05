import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Middleware function for authentication and page access control
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  const token = request.cookies.get("token")?.value || ''

  // List of public paths
  const publicPaths = ['/login', '/signup', '/verifyemail']

  // List of protected paths
  const protectedPaths = ['/profile', '/home']

  // If the path is protected and user is not logged in, redirect to login page
  if (protectedPaths.includes(path) && !token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // If the path is public and user is logged in, redirect to profile page
  if (publicPaths.includes(path) && token) {
    return NextResponse.redirect(new URL('/profile', request.url))
  }

  // If the user is trying to access the login or signup page when already logged in, redirect to profile
  if ((path === '/login' || path === '/signup') && token) {
    return NextResponse.redirect(new URL('/profile', request.url))
  }

  // If the user is trying to access the home page without authentication, redirect to login page
  if (path === '/home' && !token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // If the user is trying to access the logout page without authentication, redirect to login page
  if (path === '/logout' && !token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // If the user is logging out, clear the token and redirect to login page
  if (path === '/logout') {
    const response = NextResponse.redirect(new URL('/login', request.url))
    response.cookies.set('token', '', { maxAge: -1 })
    return response
  }

  // If the user is accessing the main page and they are logged in, allow access
  if (path === '/' && token) {
    return NextResponse.next()
  }

  // If the user is trying to access any other page, allow access
  return NextResponse.next()
}

// Matcher configuration for Next.js
export const config = {
  matcher: [
    '/',
    '/profile',
    '/verifyemail',
    '/login',
    '/signup',
    '/logout',
    '/home'
  ],
}
