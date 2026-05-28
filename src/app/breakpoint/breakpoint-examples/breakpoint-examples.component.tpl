{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set html %}
  {% include "../breakpoint-example/breakpoint-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../breakpoint-example/breakpoint-example.component.ts" %}
{% endset %}

<it-breakpoint-example></it-breakpoint-example>

<it-source-display html="{$ sanitize(html) $}" typescript="{$ sanitize(typescript) $}"></it-source-display>
