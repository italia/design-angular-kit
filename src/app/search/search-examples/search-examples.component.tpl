{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set htmlSearch %}
  {% include "../search-search-example/search-search-example.component.html" %}
{% endset %}

{% set typescriptSearch %}
  {% include "../search-search-example/search-search-example.component.ts" %}
{% endset %}

<it-search-search-example></it-search-search-example>

<it-source-display html="{$ sanitize(htmlSearch) $}" typescript="{$ sanitize(typescriptSearch) $}" >
</it-source-display>

{% set htmlBigSearch %}
  {% include "../search-big-search-example/search-big-search-example.component.html" %}
{% endset %}

{% set typescriptBigSearch %}
  {% include "../search-big-search-example/search-big-search-example.component.ts" %}
{% endset %}

<it-search-big-search-example></it-search-big-search-example>

<it-source-display html="{$ sanitize(htmlBigSearch) $}" typescript="{$ sanitize(typescriptBigSearch) $}" >
</it-source-display>
