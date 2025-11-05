import type { ComponentType } from 'react';
import type { Item } from 'nextra/normalize-pages';
import { useConfig } from 'nextra-theme-docs';

type SearchComponentProps = {
  className?: string;
  directories: Item[];
};

type HeroSearchProps = {
  className?: string;
};

export function HeroSearch({ className }: HeroSearchProps) {
  const { search } = useConfig();
  const SearchComponent = search.component as ComponentType<SearchComponentProps> | null;

  if (!SearchComponent) {
    return null;
  }

  return <SearchComponent className={className} directories={[]} />;
}
