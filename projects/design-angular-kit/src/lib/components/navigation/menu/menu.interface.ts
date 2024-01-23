export interface ItMenuItem {
  type: 'megamenu' | 'megamenu-child' | 'dropdown' | 'link' | 'divider' | 'icon' | 'text'
}

export interface ItMenuMegaMenu extends ItMenuItem {
  type: 'megamenu'
  label: string
  items?: ItMenuMegaMenuChild[]
}

export interface ItMenuMegaMenuChild extends ItMenuItem {
  type: 'megamenu-child'
  title?: string
  items?: (ItMenuLink | ItMenuDivider)[]
}

export interface ItMenuDropdown extends ItMenuItem {
  type: 'dropdown'
  label: string
  title?: string
  items?: (ItMenuLink | ItMenuDivider)[]
}

export interface ItMenuLink extends ItMenuItem {
  type: 'link'
  label: string
  link: string
  disabled?: boolean
}

export interface ItMenuDivider extends ItMenuItem {
  type: 'divider'
}

export interface ItMenuIcon extends ItMenuItem {
  type: 'icon'
  label: string
  link: string
  icon: string
  disabled?: boolean
}

export interface ItMenuText extends ItMenuItem {
  type: 'text'
  label: string
}

export type ItMenuConfig = {
  label: string;
} & (
  | {
  type: 'link-list';
  items: (ItMenuLink | ItMenuText)[];
}
  | {
  type: 'icon-list';
  items: ItMenuIcon[];
}
  | {
  type: 'navbar';
  items: (ItMenuLink | ItMenuDivider | ItMenuDropdown | ItMenuMegaMenu)[];
}
  )
