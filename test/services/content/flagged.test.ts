import app from '../../../src/app';

describe('\'content/flagged\' service', () => {
  it('registered the service', () => {
    const service = app.service('content/flagged');
    expect(service).toBeTruthy();
  });
});
