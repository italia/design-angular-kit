import { BadgeModule } from './badge.module';

describe('BadgeModule', () => {
  let badgeModule: BadgeModule;

  beforeEach(() => {
    badgeModule = new BadgeModule();
  });

  it('should create an instance', () => {
    expect(badgeModule).toBeTruthy();
  });
});
