import * as t from 'io-ts';

export const IconPosition = t.keyof({
  right: null,
  left: null
});

const LEFT = 'left';
const RIGHT = 'right';

export const ICON_POSITIONS = {
  LEFT: LEFT,
  RIGHT: RIGHT
};
