import { forwardRef } from 'react';

import { Icon } from '@/components/atoms';
import { Action } from '@/components/molecules';
import { ActionProps } from '@/components/molecules/Action';
import { cn } from '@/utils';

type LogoPrimaryVariantOrganismOwnProps = {
  label: string;
  icon: string;
};

type LogoPrimaryVariantOrganismProps = LogoPrimaryVariantOrganismOwnProps &
  Omit<ActionProps, keyof LogoPrimaryVariantOrganismOwnProps>;

const LogoPrimaryVariantOrganism = (
  { label, icon, className, ...props }: LogoPrimaryVariantOrganismProps,
  ref: LogoPrimaryVariantOrganismProps['ref']
) => {
  return (
    <Action
      aria-label={label}
      className={cn('![--action-padding-x:--spacing-xs]', className)}
      ref={ref}
      {...props}
    >
      <Icon
        className='h-2/3'
        src={icon}
      />
    </Action>
  );
};

export default forwardRef(LogoPrimaryVariantOrganism);
export type { LogoPrimaryVariantOrganismProps };
