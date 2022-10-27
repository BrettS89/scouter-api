import app from '../../../src/app';

describe('\'content/collected-item\' service', () => {
  it('registered the service', () => {
    const service = app.service('content/collected-item');
    expect(service).toBeTruthy();
  });
});
