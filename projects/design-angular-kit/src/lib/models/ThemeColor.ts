import * as t from 'io-ts';

export const ThemeColor = t.keyof({
  primary: null,
  secondary: null,
  danger: null,
  warning: null,
  info: null,
  success: null,
  light: null,
  dark: null,
});

const PRIMARY = 'primary';
const SECONDARY = 'secondary';
const DANGER = 'danger';
const WARNING = 'warning';
const INFO = 'info';
const SUCCESS = 'success';
const LIGHT = 'light';
const DARK = 'dark';

export const THEME_COLORS = {
  PRIMARY: PRIMARY,
  SECONDARY: SECONDARY,
  DANGER: DANGER,
  WARNING: WARNING,
  INFO: INFO,
  SUCCESS: SUCCESS,
  LIGHT: LIGHT,
  DARK: DARK
};
