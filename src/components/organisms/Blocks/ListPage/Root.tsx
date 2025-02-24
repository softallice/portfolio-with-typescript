import { useTranslations } from 'next-intl';
import { forwardRef } from 'react';

import { Action, ListHorizontalScroll } from '@/components/molecules';
import { ExtractPrefix, Namespace } from '@/types';
import { cn } from '@/utils';

import CleanLayoutBlock, { CleanLayoutBlockProps } from '../Layout/Clean';

type ListPageBlockOrganismOwnProps = {
  namespace: ExtractPrefix<Namespace, `${string}.blocks.`>;
};

type ListPageBlockOrganismProps = ListPageBlockOrganismOwnProps &
  Omit<CleanLayoutBlockProps, keyof ListPageBlockOrganismOwnProps>;

const ListPageBlockOrganism = (
  { namespace, className, ...props }: ListPageBlockOrganismProps,
  ref: ListPageBlockOrganismProps['ref']
) => {
  const t = useTranslations(namespace);

  const items = t.raw('items') as string[];

  return (
    <CleanLayoutBlock
      className={cn('min-h-fit', className)}
      ref={ref}
      {...props}
    >
      <ListHorizontalScroll.Root>
        {items.map((item, i) => (
          <ListHorizontalScroll.Item
            baseVelocity={(1 + 0.35 * i) * (i % 2 === 0 ? 1 : -1)}
            className='[--gap:--spacing-md]'
            key={item}
            order={4}
          >
            <span>&nbsp;{item}</span>
            <span>&nbsp;·</span>
            <span className='opacity-30 dark:opacity-10'>&nbsp;{item}</span>
            <span className='opacity-30 dark:opacity-10'>&nbsp;·</span>
            <span className='opacity-30 dark:opacity-10'>&nbsp;{item}</span>
            <span>&nbsp;·</span>
          </ListHorizontalScroll.Item>
        ))}
      </ListHorizontalScroll.Root>

      <Action
        className='my-xl'
        href={t('link.href')}
        size='md'
        variant='default'
      >
        {t('link.label')}
      </Action>
    </CleanLayoutBlock>
  );
};

export default forwardRef(ListPageBlockOrganism);
export type { ListPageBlockOrganismProps };
