import { company } from '@/content/site';
import { Label } from '@/components/ui/Typography';

type BrandProps = {
  onClick?: () => void;
};

// Marca tipográfica: não existe logo nem símbolo da Full Cycle
export function Brand({ onClick }: BrandProps) {
  return (
    <a href="#inicio" className="fc-brand" onClick={onClick}>
      <span className="fc-brand__name">{company.name}</span>
      <Label size="s">{company.tagline}</Label>
    </a>
  );
}
