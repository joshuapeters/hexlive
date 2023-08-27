import { hello } from './controller';

describe('HelloController', () => {
  it('should return hello world', () => {
    expect(hello()).toBe('Hello World!');
  });
});
