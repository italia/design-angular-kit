// See options: https://videojs.com/guides/options
interface ItVideoPlayerOptions {
  aspectRatio?: string;
  autoplay?: boolean;
  controls?: boolean;
  fluid?: boolean;
  muted?: boolean;
  sources: {
    src: string;
    type: string;
  }[];
}

export type { ItVideoPlayerOptions };
