export interface NavscrollItem {
  title: string;
  text: string;
  href: string;
  childs: NavscrollItems;
}

export type NavscrollItems = Array<NavscrollItem>;

export interface NavscrollItemActive {
  active: boolean;
}
