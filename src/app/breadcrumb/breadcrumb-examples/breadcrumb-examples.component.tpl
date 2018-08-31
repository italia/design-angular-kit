{% set html %}
  {% include "../breadcrumb-example/breadcrumb-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../breadcrumb-example/breadcrumb-example.component.ts" %}
{% endset %}

<it-breadcrumb-example></it-breadcrumb-example>

<it-source-display html="{$ html | replace("\{\{", "/\{/\{") | replace("\}\}", "/\}/\}") $}" typescript="{$ typescript | replace("\{\{", "/\{/\{") | replace("\}\}", "/\}/\}") $}" >
</it-source-display>
