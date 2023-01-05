export type AlertColor = 'info' | 'success' | 'warning' | 'danger';

export type ButtonColor =
  'primary'
  | 'outline-primary'
  | 'secondary'
  | 'outline-secondary'
  | 'success'
  | 'outline-success'
  | 'danger'
  | 'outline-danger'
  | 'warning'
  | 'outline-warning'
  | 'info'
  | 'outline-info'
  | 'light'
  | 'outline-light'
  | 'dark'
  | 'outline-dark'
  | 'link';

export type ButtonSize = 'lg' | 'sm' | 'xs';
export type ButtonType = 'submit' | 'button';

export type CalloutColor = 'success' | 'warning' | 'danger' | 'important' | 'note';
export type CalloutAppearance = 'default' | 'highlight' | 'more';

export type ElementPlacement = 'top' | 'bottom' | 'left' | 'right';

export type ProgressBarColor = 'primary' | 'success' | 'warning' | 'danger' | 'info';

export type BadgeColor = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

export type TableColor = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';

export type TableHeadColor = 'light' | 'dark';

export type TableResponsive =
  'responsive'
  | 'responsive-sm'
  | 'responsive-md'
  | 'responsive-lg'
  | 'responsive-xl'
  | 'responsive-xxl';

export type VerticalAlignment =
  'align-baseline'
  | 'align-top'
  | 'align-middle'
  | 'align-bottom'
  | 'align-text-bottom'
  | 'align-text-top';

export type DropdownDirection = 'dropup' | 'dropend' | 'dropstart';

export type CarouselType = 'default' | 'three-cols' | 'three-cols-arrow-visible';

export interface Notification {
  type: NotificationType;
  title: string;
  message?: string;
  duration?: number;
  dismissable?: boolean;
  position?: NotificationPosition;
}

export enum NotificationType {
  Standard = 'standard',
  Success = 'success',
  Error = 'error',
  Info = 'info',
  Warning = 'warning'
}

export enum NotificationPosition {
  Top = 'top-fix mt-3',
  Bottom = 'bottom-fix mb-3',
  Left = 'left-fix ms-3',
  Right = 'right-fix me-3'
}
