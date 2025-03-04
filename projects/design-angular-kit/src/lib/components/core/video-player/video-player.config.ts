import { inject, Injectable } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { initYoutubePlugin } from 'bootstrap-italia/dist/plugins/util/youtube-video.js';
import videojs from 'video.js';
import { VideoPlayerI18nService } from './video-player-i18n.service';
import { ItEmbedVideoPlayerOptions, ItNativeVideoPlayerOptions, ItVideoPlayerOptions } from './video-player.model';

const hasYoutubeVideo = (options: ItVideoPlayerOptions) => (options as ItEmbedVideoPlayerOptions).source?.type === 'video/youtube';

export type Tech = 'html5' | 'youtube';

@Injectable({ providedIn: 'root' })
export class VideoPlayerConfigService {
  readonly #languageService = inject(VideoPlayerI18nService);

  async configureTech({ tech }: { tech: Tech }) {
    if (tech === 'youtube') {
      initYoutubePlugin(videojs);
    }
  }

  mergeConfig(o: ItVideoPlayerOptions) {
    const options = o as ItNativeVideoPlayerOptions;
    const captions = options.captions ? options.captions.map(c => ({ ...c, kind: 'captions' })) : [];
    const chapters = options.chapters ? options.chapters.map(c => ({ ...c, kind: 'chapters' })) : [];
    const isYoutubeVideo = hasYoutubeVideo(options);
    const DEFAULT_CONFIG = this.#languageService.getLanguage();
    const tech = isYoutubeVideo ? 'youtube' : 'html5';
    const techOrder = [tech];
    //https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#preload
    const preload = options.preload ?? 'metadata';
    const config = { ...DEFAULT_CONFIG, ...options, preload, techOrder, tracks: [...captions, ...chapters], tech: 'html5' };
    return isYoutubeVideo
      ? {
          ...config,
          sources: [(o as ItEmbedVideoPlayerOptions).source],
          tech: 'youtube',
          youtube: { ytControls: 2, rel: 0, fs: 0, modestbranding: 1 },
        }
      : config;
  }
}
