import { ComponentPropsWithRef, forwardRef } from 'react';

import { cn } from '@/utils';

type SecondaryHeroOrganismOwnProps = {};

type SecondaryHeroOrganismProps = SecondaryHeroOrganismOwnProps &
  Omit<ComponentPropsWithRef<'div'>, keyof SecondaryHeroOrganismOwnProps>;

const SecondaryHeroOrganism = (
  { className, ...props }: SecondaryHeroOrganismProps,
  ref: SecondaryHeroOrganismProps['ref']
) => {
  return (
    <section
      className={cn(
        'flex min-h-dvh flex-col items-center justify-center pb-[--py] pt-[calc(var(--header-h)+var(--py))] [--py:--spacing-xl] max-2xl:min-h-bounds',
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(SecondaryHeroOrganism);
export type { SecondaryHeroOrganismProps };
