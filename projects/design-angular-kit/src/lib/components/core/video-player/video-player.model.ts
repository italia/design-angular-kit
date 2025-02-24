// See options: https://videojs.com/guides/options
interface ItVideoPlayerOptions {
  aspectRatio?: string;
  autoplay?: boolean;
  controls?: boolean;
  fluid?: boolean;
  muted?: boolean;
  poster?: string;
  sources: {
    src: string;
    type: string;
  }[];
}

export type { ItVideoPlayerOptions };
