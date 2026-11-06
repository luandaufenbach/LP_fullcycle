import type { ReactNode } from 'react';
import { externalLinkProps } from '@/lib/links';
import { Icon } from './Icon';

type ArrowLinkProps = {
  href: string;
  arrow?: 'up-right' | 'down';
  children: ReactNode;
};

export function ArrowLink({ href, arrow = 'up-right', children }: ArrowLinkProps) {
  return (
    <a href={href} className="fc-link" {...externalLinkProps(href)}>
      <span>{children}</span>
      <Icon name={arrow === 'down' ? 'arrow-down' : 'arrow-up-right'} size={16} />
    </a>
  );
}
