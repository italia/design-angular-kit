{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set html %}
  {% include "../video-player-default-example/video-player-default-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../video-player-default-example/video-player-default-example.component.ts" %}
{% endset %}

<it-video-player-default-example></it-video-player-default-example>

<it-source-display html="{$ sanitize(html) $}" typescript="{$ sanitize(typescript) $}"></it-source-display>

{% set html %}
  {% include "../video-player-poster-example/video-player-poster-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../video-player-poster-example/video-player-poster-example.component.ts" %}
{% endset %}

<it-video-player-poster-example></it-video-player-poster-example>

<it-source-display html="{$ sanitize(html) $}" typescript="{$ sanitize(typescript) $}"></it-source-display>

{% set html %}
  {% include "../video-player-captions-example/video-player-captions-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../video-player-captions-example/video-player-captions-example.component.ts" %}
{% endset %}

<it-video-player-captions-example></it-video-player-captions-example>

<it-source-display html="{$ sanitize(html) $}" typescript="{$ sanitize(typescript) $}"></it-source-display>

{% set html %}
  {% include "../video-player-chapters-example/video-player-chapters-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../video-player-chapters-example/video-player-chapters-example.component.ts" %}
{% endset %}

<it-video-player-chapters-example></it-video-player-chapters-example>

<it-source-display html="{$ sanitize(html) $}" typescript="{$ sanitize(typescript) $}"></it-source-display>

{% set html %}
  {% include "../video-player-streaming-example/video-player-streaming-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../video-player-streaming-example/video-player-streaming-example.component.ts" %}
{% endset %}

<it-video-player-streaming-example></it-video-player-streaming-example>

<it-source-display html="{$ sanitize(html) $}" typescript="{$ sanitize(typescript) $}"></it-source-display>

{% set html %}
  {% include "../video-player-streaming-multi-example/video-player-streaming-multi-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../video-player-streaming-multi-example/video-player-streaming-multi-example.component.ts" %}
{% endset %}

<it-video-player-streaming-multi-example></it-video-player-streaming-multi-example>

<it-source-display html="{$ sanitize(html) $}" typescript="{$ sanitize(typescript) $}"></it-source-display>


{% set html %}
  {% include "../video-player-embed-example/video-player-embed-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../video-player-embed-example/video-player-embed-example.component.ts" %}
{% endset %}

<it-video-player-embed-example></it-video-player-embed-example>

<it-source-display html="{$ sanitize(html) $}" typescript="{$ sanitize(typescript) $}"></it-source-display>
