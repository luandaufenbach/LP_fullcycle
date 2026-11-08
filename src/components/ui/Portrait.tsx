import Image, { type StaticImageData } from 'next/image';
import { gabriela } from '@/content/site';
import gabrielaPhoto from '@/assets/gabriela-gomes.png';

type PortraitProps = {
  /** Valor do atributo sizes da imagem, conforme o espaço que ela ocupa */
  sizes: string;
  preload?: boolean;
  /** Por padrão, o retrato da Gabriela */
  src?: StaticImageData;
  alt?: string;
};

/** Retrato 4:5 com as marcas de canto (quadrat). */
export function Portrait({
  sizes,
  preload = false,
  src = gabrielaPhoto,
  alt = gabriela.photoAlt,
}: PortraitProps) {
  return (
    <div className="fc-quadrat fc-photo__quadrat">
      <div className="fc-photo__frame">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          preload={preload}
          placeholder="blur"
          style={{ objectPosition: 'center 30%' }}
        />
      </div>
    </div>
  );
}

/** Quadro provisório enquanto a foto não chega: hachura com as iniciais. */
export function PortraitPlaceholder({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2);

  return (
    <div className="fc-quadrat fc-photo__quadrat">
      <div className="fc-photo__frame fc-photo__placeholder" role="img" aria-label={name}>
        <span aria-hidden="true">{initials}</span>
      </div>
    </div>
  );
}
