// See options: https://videojs.com/guides/options

interface Source {
  src: string;
  type: string;
}

interface Caption {
  lang: string;
  src: string;
  label: string;
  default?: true;
}

interface Chapter {
  lang: string;
  src: string;
  label: string;
  default?: true;
}

type Sources = Array<Source>;
type Captions = Array<Caption>;
type Chapters = Array<Chapter>;

interface ItVideoPlayerOptions {
  aspectRatio?: string;
  autoplay?: boolean;
  controls?: boolean;
  fluid?: boolean;
  muted?: boolean;
  poster?: string;
  sources: Sources;
  captions?: Captions;
  chapters?: Chapters;
}

export type { ItVideoPlayerOptions };
