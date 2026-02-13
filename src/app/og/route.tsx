import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') || 'zach davidson';

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          backgroundColor: '#ffffff',
          padding: '60px',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        {/* main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontSize: '56px',
              fontWeight: 700,
              color: '#171717',
              lineHeight: 1.2,
              marginBottom: '20px',
            }}
          >
            {title}
          </div>
        </div>

        {/* footer */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '40px',
          }}
        >
          {/* left: pill */}
          <div
            style={{
              display: 'flex',
              backgroundColor: '#171717',
              color: '#ffffff',
              padding: '12px 24px',
              borderRadius: '8px',
              fontSize: '18px',
            }}
          >
            zach davidson
          </div>

          {/* right: brand */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '20px',
            }}
          >
            <span style={{ color: '#6B6B6B' }}>conscious technologist</span>
            <span style={{ color: '#6B6B6B' }}>|</span>
            <span style={{ color: '#FF6300', fontWeight: 600 }}>modern magician</span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
