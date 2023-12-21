{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set html %}
  {% include "../list-example/list-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../list-example/list-example.component.ts" %}
{% endset %}

<it-list-example></it-list-example>

<it-source-display html="{$ sanitize(html) $}" typescript="{$ sanitize(typescript) $}" >
</it-source-display>
