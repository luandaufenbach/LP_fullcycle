import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type HeadingProps = {
  level?: 1 | 2 | 3 | 4;
  size?: 'xl' | 'l' | 'm' | 'heading' | 'title';
  id?: string;
  className?: string;
  children: ReactNode;
};

/** Título em Manrope. Use no máximo um <em> por título para o destaque em serifa. */
export function Heading({ level = 2, size = 'l', id, className, children }: HeadingProps) {
  const Tag = `h${level}` as const;
  return (
    <Tag id={id} className={cn('fc-h', `fc-h--${size}`, className)}>
      {children}
    </Tag>
  );
}

type LabelProps = {
  as?: 'span' | 'p' | 'dt';
  tone?: 'muted' | 'strong' | 'accent';
  size?: 'md' | 's';
  className?: string;
  children: ReactNode;
};

/** Rótulo em Barlow Condensed caixa-alta, para dados, legendas e microgarantias. */
export function Label({
  as: Tag = 'span',
  tone = 'muted',
  size = 'md',
  className,
  children,
}: LabelProps) {
  return (
    <Tag
      className={cn(
        'fc-label',
        size === 's' && 'fc-label--s',
        tone !== 'muted' && `fc-label--${tone}`,
        className,
      )}
    >
      {children}
    </Tag>
  );
}

type SectionHeaderProps = {
  title: ReactNode;
  aside?: ReactNode;
  id?: string;
};

/** Cabeçalho dividido: título nas colunas 1–7 e texto de apoio nas 9–12. */
export function SectionHeader({ title, aside, id }: SectionHeaderProps) {
  return (
    <div className="fc-grid fc-split">
      <div className="fc-split__title">
        <Heading id={id}>{title}</Heading>
      </div>
      {aside && (
        <div className="fc-split__aside">
          <p className="fc-lead">{aside}</p>
        </div>
      )}
    </div>
  );
}
