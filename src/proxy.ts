import { NextRequest } from 'next/server'

export async function proxy(request: NextRequest) {
  try {
  } catch {}
}

export const config = {
  matcher: [
    '/dashboard',
    '/dashboard/:path*',
    '/login',
    // 1. Skip all Next.js internals (_next) and static asset files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // 2. Always ensure it processes API and tRPC endpoints
    '/(api|trpc)(.*)',
  ],
}
