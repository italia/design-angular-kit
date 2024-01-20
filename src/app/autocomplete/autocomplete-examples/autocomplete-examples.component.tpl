{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set htmlSearch %}
  {% include "../autocomplete-search-example/autocomplete-search-example.component.html" %}
{% endset %}

{% set typescriptSearch %}
  {% include "../autocomplete-search-example/autocomplete-search-example.component.ts" %}
{% endset %}

<it-autocomplete-search-example></it-autocomplete-search-example>

<it-source-display html="{$ sanitize(htmlSearch) $}" typescript="{$ sanitize(typescriptSearch) $}" >
</it-source-display>

{% set htmlBigSearch %}
  {% include "../autocomplete-big-search-example/autocomplete-big-search-example.component.html" %}
{% endset %}

{% set typescriptBigSearch %}
  {% include "../autocomplete-big-search-example/autocomplete-big-search-example.component.ts" %}
{% endset %}

<it-autocomplete-big-search-example></it-autocomplete-big-search-example>

<it-source-display html="{$ sanitize(htmlBigSearch) $}" typescript="{$ sanitize(typescriptBigSearch) $}" >
</it-source-display>
