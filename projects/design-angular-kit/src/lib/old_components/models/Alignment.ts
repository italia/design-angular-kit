import * as t from 'io-ts';


export enum VerticalAlign {
  top = "top",
  middle = 'middle',
  bottom = 'bottom'
}

export enum HorizontalAlign {
  left = 'left',
  right = 'right'
}

export const HORIZONTAL_ALIGN = t.keyof(HorizontalAlign);
export const VERTICAL_ALIGN = t.keyof(VerticalAlign);
