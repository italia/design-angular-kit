// See options: https://videojs.com/guides/options
interface ItVideoPlayerOptions {
  fluid: boolean;
  aspectRatio: string;
  autoplay: boolean;
  sources: {
    src: string;
    type: string;
  }[];
}

export type { ItVideoPlayerOptions };
