{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set html %}
  {% include "../divider-example/divider-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../divider-example/divider-example.component.ts" %}
{% endset %}

<it-divider-example></it-divider-example>

<it-source-display html="{$ sanitize(html) $}" typescript="{$ sanitize(typescript) $}"></it-source-display>
