import * as t from 'io-ts';

export const InteractionTrigger = t.keyof({
  click: null,
  focus: null,
  hover: null,
});

const CLICK = 'click';
const FOCUS = 'focus';
const HOVER = 'hover';

export const INTERACTION_TRIGGERS = {
  CLICK: CLICK,
  FOCUS: FOCUS,
  HOVER: HOVER,
};
