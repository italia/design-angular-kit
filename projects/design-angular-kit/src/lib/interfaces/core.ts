import { IconName } from './icon';

export type AlertColor = 'primary' | 'info' | 'success' | 'warning' | 'danger' | (string & {});

export type ButtonColor =
  | 'primary'
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
  | 'link'
  | (string & {});

export type ButtonSize = 'lg' | 'sm' | 'xs';
export type ButtonType = 'submit' | 'button';

export type CalloutColor = 'success' | 'warning' | 'danger' | 'important' | 'note' | (string & {});
export type CalloutAppearance = 'default' | 'highlight' | 'more';

export type ChipColor = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | (string & {});

export type ElementPlacement = 'top' | 'bottom' | 'left' | 'right';

export type ProgressBarColor = 'primary' | 'success' | 'warning' | 'danger' | 'info' | (string & {});

export type BadgeColor = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | (string & {});

export type TableColor = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | (string & {});

export type TableHeadColor = 'light' | 'dark';

export type TableResponsive = 'responsive' | 'responsive-sm' | 'responsive-md' | 'responsive-lg' | 'responsive-xl' | 'responsive-xxl';

export type VerticalAlignment = 'align-baseline' | 'align-top' | 'align-middle' | 'align-bottom' | 'align-text-bottom' | 'align-text-top';

export type DropdownDirection = 'dropup' | 'dropend' | 'dropstart';

export type CarouselType = 'default' | 'three-cols' | 'three-cols-arrow-visible';

export type TimelinePINType = 'default' | 'evidence' | 'now';

export interface TimelineElement {
  pin: {
    type?: TimelinePINType;
    icon?: IconName;
    text: string;
  };
  category?: {
    title: string;
    link: string;
  };
  title: string;
  text: string;
  signature?: string;
  eventDate?: Date;
  link?: string;
}

export interface Notification {
  /**
   * Notification type
   */
  type: NotificationType;

  /**
   * Notification title
   */
  title: string;

  /**
   * Notification message / text
   */
  message?: string;

  /**
   * Custom duration of notification
   */
  duration?: number;

  /**
   * The close notification button appears
   */
  dismissible?: boolean;

  /**
   * Custom position of notification
   */
  position?: NotificationPosition;

  /**
   * Custom icon of notification
   */
  icon?: IconName;
}

export enum NotificationType {
  Standard = 'standard',
  Success = 'success',
  Error = 'error',
  Info = 'info',
  Warning = 'warning',
}

export enum NotificationPosition {
  Top = 'top-fix mt-3',
  Bottom = 'bottom-fix mb-3',
  Left = 'left-fix ms-3',
  Right = 'right-fix me-3',
}
