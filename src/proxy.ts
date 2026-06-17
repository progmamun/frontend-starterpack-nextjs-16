import { NextRequest } from 'next/server'

export async function proxy(request: NextRequest) {
  try {
  } catch {}
}

export const config = {
  matcher: ['/dashboard', '/dashboard/:path*'],
}
