{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set html %}
  {% include "../forward-example/forward-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../forward-example/forward-example.component.ts" %}
{% endset %}

<it-forward-example></it-forward-example>

<it-source-display html="{$ sanitize(html) $}" typescript="{$ sanitize(typescript) $}" >
</it-source-display>
