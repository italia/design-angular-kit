import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { VideoJsTranslation, VideoPlayerTranslations } from './video-player-i18n.model';

@Injectable({ providedIn: 'root' })
export class VideoPlayerI18n {
  readonly #translate = inject(TranslateService);
  readonly languages = this.#translate
    .getLangs()
    .map<{ language: string; translations: VideoPlayerTranslations }>(language => ({
      language,
      translations: this.#translate.instant(language + '.video-player'),
    }))
    .reduce((p, { language, translations }) => ({ ...p, [language]: mapToVideoJsTranslation(translations) }), {});
}

function mapToVideoJsTranslation(translations: VideoPlayerTranslations): VideoJsTranslation {
  return {
    'Audio Player': translations['audio-player'],
    'Video Player': translations['video-player'],
    Play: translations.play,
    Pause: translations.pause,
    Replay: translations.replay,
    'Current Time': translations['current-time'],
    Duration: translations.duration,
    'Remaining Time': translations['remaining-time'],
    'Stream Type': translations['stream-type'],
    LIVE: translations.live,
    Loaded: translations.loaded,
    Progress: translations.progress,
    'Progress Bar': translations['progress-bar'],
    'progress bar timing: currentTime={1} duration={2}': translations['progress-bar-timing:-currenttime={1}-duration={2}'],
    Fullscreen: translations.fullscreen,
    'Exit Fullscreen': translations['exit-fullscreen'],
    Mute: translations.mute,
    Unmute: translations.unmute,
    'Playback Rate': translations['playback-rate'],
    Subtitles: translations.subtitles,
    'subtitles off': translations['subtitles-off'],
    Captions: translations.captions,
    'captions off': translations['captions-off'],
    Chapters: translations.chapters,
    Descriptions: translations.descriptions,
    'descriptions off': translations['descriptions-off'],
    'Audio Track': translations['audio-track'],
    'Volume Level': translations['volume-level'],
    'You aborted the media playback': translations['you-aborted-the-media-playback'],
    'A network error caused the media download to fail part-way.':
      translations['a-network-error-caused-the-media-download-to-fail-part-way.'],
    'The media could not be loaded, either because the server or network failed or because the format is not supported.':
      translations['the-media-could-not-be-loaded,-either-because-the-server-or-network-failed-or-because-the-format-is-not-supported.'],
    'The media playback was aborted due to a corruption problem or because the media used features your browser did not support.':
      translations[
        'the-media-playback-was-aborted-due-to-a-corruption-problem-or-because-the-media-used-features-your-browser-did-not-support.'
      ],
    'No compatible source was found for this media.': translations['no-compatible-source-was-found-for-this-media.'],
    'The media is encrypted and we do not have the keys to decrypt it.':
      translations['the-media-is-encrypted-and-we-do-not-have-the-keys-to-decrypt-it.'],
    'Play Video': translations['play-video'],
    Close: translations.close,
    'Close Modal Dialog': translations['close-modal-dialog'],
    'Modal Window': translations['modal-window'],
    'This is a modal window': translations['this-is-a-modal-window'],
    'This modal can be closed by pressing the Escape key or activating the close button.':
      translations['this-modal-can-be-closed-by-pressing-the-escape-key-or-activating-the-close-button.'],
    ', opens captions settings dialog': translations[',-opens-captions-settings-dialog'],
    ', opens subtitles settings dialog': translations[',-opens-subtitles-settings-dialog'],
    ', opens descriptions settings dialog': translations[',-opens-descriptions-settings-dialog'],
    ', selected': translations[',-selected'],
    'captions settings': translations['captions-settings'],
    'subtitles settings': translations['subtitles-settings'],
    'descriptions settings': translations['descriptions-settings'],
    Text: translations.text,
    White: translations.white,
    Black: translations.black,
    Red: translations.red,
    Green: translations.green,
    Blue: translations.blue,
    Yellow: translations.yellow,
    Magenta: translations.magenta,
    Cyan: translations.cyan,
    Background: translations.background,
    Window: translations.window,
    Transparent: translations.transparent,
    'Semi-Transparent': translations['semi-transparent'],
    Opaque: translations.opaque,
    'Font Size': translations['font-size'],
    'Text Edge Style': translations['text-edge-style'],
    None: translations.none,
    Uniform: translations.uniform,
    'Drop shadow': translations['drop-shadow'],
    'Font Family': translations['font-family'],
    'Proportional Sans-Serif': translations['proportional-sans-serif'],
    'Monospace Sans-Serif': translations['monospace-sans-serif'],
    'Proportional Serif': translations['proportional-serif'],
    'Monospace Serif': translations['monospace-serif'],
    'Small Caps': translations['small-caps'],
    Reset: translations.reset,
    'restore all settings to the default values': translations['restore-all-settings-to-the-default-values'],
    Done: translations.done,
    'Caption Settings Dialog': translations['caption-settings-dialog'],
    'Beginning of dialog window. Escape will cancel and close the window.':
      translations['beginning-of-dialog-window.-escape-will-cancel-and-close-the-window.'],
    'End of dialog window.': translations['end-of-dialog-window.'],
    '{1} is loading.': translations['{1}-is-loading.'],
    'Exit Picture-in-Picture': translations['exit-picture-in-picture'],
    'Picture-in-Picture': translations['picture-in-picture'],
    Color: translations.color,
    Opacity: translations.opacity,
    'Text Background': translations['text-background'],
    'Caption Area Background': translations['caption-area-background'],
    'Skip forward {1} seconds': translations['skip-forward-{1}-seconds'],
    'Skip backward {1} seconds': translations['skip-backward-{1}-seconds'],
  };
}
