import attrs from './attributes';

function convert(name: string): string {
  if (!attrs.hasOwnProperty(name)) {
    return name;
  }
  return attrs[name];
}

export default convert;
