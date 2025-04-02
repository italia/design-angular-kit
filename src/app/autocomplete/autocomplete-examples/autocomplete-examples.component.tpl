{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set html %}
  {% include "../autocomplete-example/autocomplete-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../autocomplete-example/autocomplete-example.component.ts" %}
{% endset %}

<it-autocomplete-example></it-autocomplete-example>

<it-source-display
    html="{$ sanitize(html) $}"
    typescript="{$ sanitize(typescript) $}" >
</it-source-display>
