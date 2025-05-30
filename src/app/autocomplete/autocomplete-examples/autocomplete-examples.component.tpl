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

{% set html_double %}
  {% include "../autocomplete-double/autocomplete-double.component.html" %}
{% endset %}

{% set typescript_double %}
  {% include "../autocomplete-double/autocomplete-double.component.ts" %}
{% endset %}

<it-autocomplete-double></it-autocomplete-double>

<it-source-display
    html="{$ sanitize(html_double) $}"
    typescript="{$ sanitize(typescript_double) $}" >
</it-source-display>
