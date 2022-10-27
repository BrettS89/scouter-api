import app from '../../../src/app';

describe('\'content/item\' service', () => {
  it('registered the service', () => {
    const service = app.service('content/item');
    expect(service).toBeTruthy();
  });
});
