import attrs from './attributes';

export function convert(name: string): string {
  if (!attrs.hasOwnProperty(name)) {
    return name;
  }
  return attrs[name];
}

export const attributes = attrs;
