import type { ComponentProps } from 'react';
import { cn } from '@/lib/cn';
import { externalLinkProps } from '@/lib/links';
import { Icon, type IconName } from './Icon';

type Arrow = 'up-right' | 'down';

type ButtonProps = Omit<ComponentProps<'a'>, 'href'> & {
  href: string;
  variant?: 'primary' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: IconName;
  arrow?: Arrow;
  block?: boolean;
};

const arrowIcons: Record<Arrow, IconName> = {
  'up-right': 'arrow-up-right',
  down: 'arrow-down',
};

// Todos os botões da landing levam a um destino, então são sempre links
export function Button({
  href,
  variant = 'primary',
  size = 'md',
  icon,
  arrow,
  block = false,
  className,
  children,
  ...rest
}: ButtonProps) {
  const iconSize = size === 'lg' ? 20 : 18;

  return (
    <a
      href={href}
      {...externalLinkProps(href)}
      {...rest}
      className={cn(
        'fc-btn',
        `fc-btn--${variant}`,
        size !== 'md' && `fc-btn--${size}`,
        block && 'fc-btn--block',
        className,
      )}
    >
      {icon && <Icon name={icon} size={iconSize} />}
      <span>{children}</span>
      {arrow && (
        <span data-arrow={arrow}>
          <Icon name={arrowIcons[arrow]} size={iconSize} />
        </span>
      )}
    </a>
  );
}
