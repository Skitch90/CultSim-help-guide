import { Entity } from './model';

export function isEntity(item: string | Entity): item is Entity {
  return (item as Entity).name !== undefined;
}

export function filterOptions(options: string[], value: string): string[] {
    const filterValue = value.toLowerCase();

    return options.filter(option => option.toLowerCase().includes(filterValue));
}
