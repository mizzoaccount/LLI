// app/api/verify-subscription/[token]/route.ts
/*import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { token: string } }) {
  try {
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/subscriptions/verify-subscription/${params.token}`, {
      method: 'GET',
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { success: false, message: data.message || 'Verification failed' },
        { status: response.status }
      );
    }

    return NextResponse.json(
      { success: true, message: data.message || 'Subscription verified successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Verification error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}*/

import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const token = request.nextUrl.pathname.split('/').pop(); // grab [token] from URL

    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/subscriptions/verify-subscription/${token}`, {
      method: 'GET',
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { success: false, message: data.message || 'Verification failed' },
        { status: response.status }
      );
    }

    return NextResponse.json(
      { success: true, message: data.message || 'Subscription verified successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Verification error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
