import { CheckboxModule } from './checkbox.module';

describe('CheckboxModule', () => {
  let checkboxModule: CheckboxModule;

  beforeEach(() => {
    checkboxModule = new CheckboxModule();
  });

  it('should create an instance', () => {
    expect(checkboxModule).toBeTruthy();
  });
});
