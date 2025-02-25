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
type Preload = 'auto' | 'none' | 'metadata' | '';
type EmbedSourceType = 'video/youtube';

type ItNativeVideoPlayerOptions = {
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
};

type ItEmbedVideoPlayerOptions = Omit<ItNativeVideoPlayerOptions, 'sources' | 'captions' | 'chapters'> & {
  source: Source & { type: EmbedSourceType };
};

type ItVideoPlayerOptions = ItNativeVideoPlayerOptions | ItEmbedVideoPlayerOptions;

type ItVideoPlayerConfig = ItVideoPlayerOptions & { tech: string };

export type { ItEmbedVideoPlayerOptions, ItNativeVideoPlayerOptions, ItVideoPlayerConfig, ItVideoPlayerOptions };
