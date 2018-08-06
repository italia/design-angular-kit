{% set html %}
  {% include "../tabs-example/tabs-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../tabs-example/tabs-example.component.ts" %}
{% endset %}

<it-tabs-example></it-tabs-example>

<it-source-display html="{$ html | replace("\{\{", "/\{/\{") | replace("\}\}", "/\}/\}") $}" typescript="{$ typescript | replace("\{\{", "/\{/\{") | replace("\}\}", "/\}/\}") $}" >
</it-source-display>
