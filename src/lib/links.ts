// Links para outros sites abrem em nova aba; âncoras e mailto: seguem na mesma
export function externalLinkProps(href: string) {
  return /^https?:\/\//.test(href) ? { target: '_blank', rel: 'noopener noreferrer' } : {};
}
