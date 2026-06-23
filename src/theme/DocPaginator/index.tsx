import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import PaginatorNavLink from '@theme/PaginatorNavLink';
import type {Props} from '@theme/DocPaginator';

export default function DocPaginator(props: Props): ReactNode {
  const {className, previous, next} = props;

  return (
    <nav className={clsx(className, 'pagination-nav')} aria-label="Страницы документации">
      {previous && (
        <PaginatorNavLink
          {...previous}
          subLabel="Предыдущая статья"
        />
      )}
      {next && (
        <PaginatorNavLink
          {...next}
          subLabel="Следующая статья"
          isNext
        />
      )}
    </nav>
  );
}
