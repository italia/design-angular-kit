// See options: https://videojs.com/guides/options

interface Source {
  src: string;
  type: string;
}

type Sources = Array<Source>;

interface Caption {
  lang: string;
  src: string;
  label: string;
  default?: true;
}

type Captions = Array<Caption>;

interface ItVideoPlayerOptions {
  aspectRatio?: string;
  autoplay?: boolean;
  controls?: boolean;
  fluid?: boolean;
  muted?: boolean;
  poster?: string;
  sources: Sources;
  captions?: Captions;
}

export type { ItVideoPlayerOptions };
