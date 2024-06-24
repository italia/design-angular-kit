{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set htmlColor %}
  {% include "../timeline-default-example/timeline-default-example.component.html" %}
{% endset %}

{% set typescriptColor %}
  {% include "../timeline-default-example/timeline-default-example.component.ts" %}
{% endset %}

<it-timeline-default-example></it-timeline-default-example>

<it-source-display html="{$ sanitize(htmlColor) $}" typescript="{$ sanitize(typescriptColor) $}" >
</it-source-display>
