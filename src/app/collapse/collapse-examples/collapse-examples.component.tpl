{% set html %}
  {% include "../collapse-example/collapse-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../collapse-example/collapse-example.component.ts" %}
{% endset %}

<it-collapse-example></it-collapse-example>

<it-source-display 
    html="{$ html | replace("\{\{", "/\{/\{") | replace("\}\}", "/\}/\}") $}" 
    typescript="{$ typescript | replace("\{\{", "/\{/\{") | replace("\}\}", "/\}/\}") $}" >
</it-source-display>