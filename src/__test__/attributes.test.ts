import attributes from '../attributes';

describe('Attributes map', () => {
  test('should match attributes number', () => {
    expect(attributes).toBeTruthy();
    expect(Object.entries(attributes).length).toBe(217);
  });
});
