import * as t from 'io-ts';

export const InteractionTrigger = t.keyof({
  click: null,
  focus: null,
});

const CLICK = 'click';
const FOCUS = 'focus';

export const INTERACTION_TRIGGERS = {
  CLICK: CLICK,
  FOCUS: FOCUS,
};
