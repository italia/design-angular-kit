{% from "../../macro.template.njk" import sanitize as sanitize %}


{% set html %}
  {% include "../select-example/select-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../select-example/select-example.component.ts" %}
{% endset %}


<it-select-example></it-select-example>

<it-source-display html="{$ sanitize(html) $}" typescript="{$ sanitize(typescript) $}">
</it-source-display>

