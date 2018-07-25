import * as t from 'io-ts';

export const ButtonSize = t.keyof({
  lg: null,
  sm: null,
  xs: null,
});

const LG = 'lg';
const SM = 'sm';
const XS = 'xs';

export const BUTTON_SIZES = {
  LG: LG,
  SM: SM,
  XS: XS,
};
