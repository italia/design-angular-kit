{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set html %}
  {% include "../collapse-example/collapse-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../collapse-example/collapse-example.component.ts" %}
{% endset %}

<it-collapse-example></it-collapse-example>

<it-source-display
    html="{$ sanitize(html) $}"
    typescript="{$ sanitize(typescript) $}" >
</it-source-display>
