export type InputControlType = 'text' | 'email' | 'number' | 'date' | 'time' | 'tel' | 'color' | 'url' | 'search';

export interface SelectControlOption {
  value: any,
  text?: string,
  selected?: boolean | ((value: any) => boolean),
  disabled?: boolean | ((value: any) => boolean)
}

export interface SelectControlGroup {
  label: string,
  options: Array<SelectControlOption>,
  dragdrop?: boolean
}

export interface UploadFileListItem {
  /**
   * The item id
   */
  id: number,

  /**
   * The uploaded file
   */
  file: File,

  /**
   * Show progress bar
   *
   * The status of the item changes based on the value:
   * - <b>uploading</b>: if value is between 0 and 100 (exclusive 0 < value < 100)
   * - <b>success</b>: if value is greater than 100
   */
  progress?: number,

  /**
   * Show the ability to delete item
   * @default false
   */
  removable?: boolean,

  /**
   * Set the status of the item as 'error'
   */
  error?: string,

  /**
   * Add tooltip on file item name
   */
  tooltip?: string
}


/**
 * Elemento disponibile per l'autocompletamento del it-form-input
 */
export interface AutoCompleteItem {
  /** Valore voce di autocompletamento */
  value: string;
  /** Opzionale. Path in cui ricercare l'immagine dell'avatar da posizionare a sinistra della voce di autocompletamento */
  avatarSrcPath?: string;
  /** Opzionale. Testo in alternativa dell'avatar per accessibilità */
  avatarAltText?: string;
  /** Opzionale. Icona posizionata a sinistra della voce di autocompletamento */
  icon?: string;
  /** Opzionale. Label posizionata a destra della voce di autocompletamento */
  label?: string;
  /** Opzionale. Link relativo all'elemento */
  link?: string
}
