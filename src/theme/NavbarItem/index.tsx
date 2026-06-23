import React from 'react';
import DefaultNavbarItem from '@theme/NavbarItem/DefaultNavbarItem';
import SearchModal from './SearchModal';

export default function NavbarItem(props: {type?: string; [key: string]: unknown}): JSX.Element | null {
  if (props.type === 'custom-search-button') {
    return <SearchModal />;
  }

  return <DefaultNavbarItem {...props} />;
}
