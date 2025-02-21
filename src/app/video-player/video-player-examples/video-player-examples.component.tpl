{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set html %}
  {% include "../video-player-default-example/video-player-default-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../video-player-default-example/video-player-default-example.component.ts" %}
{% endset %}

<it-video-player-default-example></it-video-player-default-example>

<it-source-display html="{$ sanitize(html) $}" typescript="{$ sanitize(typescript) $}"></it-source-display>
