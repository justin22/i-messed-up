import iMessedUp from '../index';

describe('i messed up', () => {

  test('should have source in data', () => {
    const data = iMessedUp(false);
    expect(data).toHaveProperty('source');
  });

  test('should return data as string', () => {
    const data = iMessedUp();
    expect(typeof data).toBe("string");
  });

  test('should have title', () => {
    const data = iMessedUp(false);
    expect(data).toHaveProperty('title');;
  });

});