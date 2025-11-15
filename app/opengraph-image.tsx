import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Jurmola - Your Jurmala, Your Capital';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'serif',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            color: '#000',
            marginBottom: 20,
            textAlign: 'center',
            padding: '0 40px',
          }}
        >
          Your Jurmala - Your Capital
        </div>
        <div
          style={{
            fontSize: 32,
            color: '#666',
            textAlign: 'center',
            padding: '0 40px',
          }}
        >
          The Baltic's Finest News Source
        </div>
        <div
          style={{
            fontSize: 24,
            color: '#999',
            marginTop: 60,
          }}
        >
          jurmola.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

