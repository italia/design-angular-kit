import * as t from 'io-ts';

export const InteractionTrigger = t.keyof({
  click: null,
  focus: null,
  hover: null,
});

export const PopoverTrigger = t.keyof({
  click: null,
  focus: null,
});

const CLICK = 'click';
const FOCUS = 'focus';
const HOVER = 'hover';

export const INTERACTION_TRIGGERS = {
  CLICK: CLICK,
  FOCUS: FOCUS,
  HOVER: HOVER,
};

export const POPOVER_TRIGGERS = {
  CLICK: CLICK,
  FOCUS: FOCUS,
};
