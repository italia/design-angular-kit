export type NavscrollItem = ({ text: string; html?: never } | { html: string; text?: never }) & {
  title: string;
  href: string;
  childs: NavscrollItems;
};

export type NavscrollItems = Array<NavscrollItem>;

export interface NavscrollItemActive {
  active: boolean;
}
