{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set html %}
  {% include "../dropdown-example/dropdown-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../dropdown-example/dropdown-example.component.ts" %}
{% endset %}

<it-dropdown-example></it-dropdown-example>

<it-source-display 
    html="{$ sanitize(html) $}"
    typescript="{$ sanitize(typescript) $}">
</it-source-display>
