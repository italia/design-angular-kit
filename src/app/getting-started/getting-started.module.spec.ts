import { GettingStartedModule } from './getting-started.module';

describe('GettingStartedModule', () => {
  let gettingStartedModule: GettingStartedModule;

  beforeEach(() => {
    gettingStartedModule = new GettingStartedModule();
  });

  it('should create an instance', () => {
    expect(gettingStartedModule).toBeTruthy();
  });
});
