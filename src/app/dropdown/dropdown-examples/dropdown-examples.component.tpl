{% set html %}
  {% include "../dropdown-example/dropdown-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../dropdown-example/dropdown-example.component.ts" %}
{% endset %}

<it-dropdown-example></it-dropdown-example>

<it-source-display 
    html="{$ html | replace("\{\{", "/\{/\{") | replace("\}\}", "/\}/\}") $}"
    typescript="{$ typescript | replace("\{\{", "/\{/\{") | replace("\}\}", "/\}/\}") $}">
</it-source-display>
