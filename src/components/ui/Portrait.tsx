import Image from 'next/image';
import { gabriela } from '@/content/site';
import gabrielaPhoto from '@/assets/gabriela-gomes.png';

type PortraitProps = {
  /** Valor do atributo sizes da imagem, conforme o espaço que ela ocupa */
  sizes: string;
  preload?: boolean;
};

/** Retrato 4:5 da Gabriela com as marcas de canto (quadrat). */
export function Portrait({ sizes, preload = false }: PortraitProps) {
  return (
    <div className="fc-quadrat fc-photo__quadrat">
      <div className="fc-photo__frame">
        <Image
          src={gabrielaPhoto}
          alt={gabriela.photoAlt}
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
