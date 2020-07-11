import { convert } from '../convert';

describe('Convert', () => {
  test('should bypass not html attribute', () => {
    expect(convert('self-start')).toBe('self-start');
    expect(convert('x-start')).toBe('x-start');
    expect(convert('x-start-end')).toBe('x-start-end');
  });
  test('should convert html attribute to react attribute', () => {
    expect(convert('crossorigin')).toBe('crossOrigin');
  });
  test('should bypass aria-*', () => {
    expect(convert('aria-ok')).toBe('aria-ok');
  });
});
