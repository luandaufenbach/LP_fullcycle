import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { company, gabriela } from '@/content/site';

export const alt = `${company.legalName} — ${gabriela.name}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const colors = { solo: '#2a2714', creme: '#f2eddf', cremeBody: '#b9b39c', broto: '#c9dc63' };

export default async function OpengraphImage() {
  const photo = await readFile(join(process.cwd(), 'src/assets/gabriela-gomes.png'));
  const photoSrc = `data:image/png;base64,${photo.toString('base64')}`;

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 72,
        padding: '0 88px',
        background: colors.solo,
        color: colors.creme,
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div
          style={{
            fontSize: 26,
            color: colors.broto,
            letterSpacing: 3,
            textTransform: 'uppercase',
          }}
        >
          Full Cycle · Santa Catarina
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 600,
            lineHeight: 1.08,
            marginTop: 28,
            letterSpacing: -2,
          }}
        >
          Consultoria ambiental e restauração ecológica
        </div>
        <div style={{ fontSize: 28, color: colors.cremeBody, marginTop: 32 }}>
          {`${gabriela.name} · ${gabriela.role}`}
        </div>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse só aceita <img> */}
      <img src={photoSrc} width={340} height={425} alt="" style={{ objectFit: 'cover' }} />
    </div>,
    size,
  );
}
