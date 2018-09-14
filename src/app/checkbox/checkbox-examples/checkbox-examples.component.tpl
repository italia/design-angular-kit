{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set html %}
  {% include "../checkbox-example/checkbox-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../checkbox-example/checkbox-example.component.ts" %}
{% endset %}

<it-checkbox-example></it-checkbox-example>

<it-source-display html="{$ sanitize(html) $}" typescript="{$ sanitize(typescript) $}" >
</it-source-display>
