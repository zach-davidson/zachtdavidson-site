import { NextResponse } from 'next/server'

const PASSWORD = 'houdini'

export async function POST(request: Request) {
  const { password } = await request.json()

  if (password === PASSWORD) {
    const response = NextResponse.json({ success: true })
    response.cookies.set('site-auth', PASSWORD, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 30, // 30 days
    })
    return response
  }

  return NextResponse.json({ error: 'invalid password' }, { status: 401 })
}
