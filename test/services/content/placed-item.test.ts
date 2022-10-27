import app from '../../../src/app';

describe('\'content/placed-item\' service', () => {
  it('registered the service', () => {
    const service = app.service('content/placed-item');
    expect(service).toBeTruthy();
  });
});
