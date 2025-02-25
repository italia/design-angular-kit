// See options: https://videojs.com/guides/options

interface Source {
  src: string;
  type: string | EmbedSourceType;
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
type Preload = 'auto' | 'none' | 'metadata' | '';

interface ItNativeVideoPlayerOptions {
  aspectRatio?: string;
  autoplay?: boolean;
  controls?: boolean;
  fluid?: boolean;
  muted?: boolean;
  poster?: string;
  preload?: Preload;
  sources: Sources;
  captions?: Captions;
  chapters?: Chapters;
}

type EmbedSourceType = 'video/youtube';

type ItEmbedVideoPlayerOptions = Omit<ItNativeVideoPlayerOptions, 'sources' | 'captions' | 'chapters'>;

type ItVideoPlayerOptions = ItNativeVideoPlayerOptions | ItEmbedVideoPlayerOptions;

export type { ItEmbedVideoPlayerOptions, ItNativeVideoPlayerOptions, ItVideoPlayerOptions };
