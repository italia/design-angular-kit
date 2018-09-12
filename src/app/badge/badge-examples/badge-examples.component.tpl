{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set html %}
  {% include "../badge-example/badge-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../badge-example/badge-example.component.ts" %}
{% endset %}

<it-badge-example></it-badge-example>

<it-source-display html="{$ sanitize(html) $}" typescript="{$ sanitize(typescript) $}" >
</it-source-display>
