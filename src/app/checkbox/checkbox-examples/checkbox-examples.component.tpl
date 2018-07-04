{% set html %}
  {% include "../checkbox-example/checkbox-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../checkbox-example/checkbox-example.component.ts" %}
{% endset %}

<it-checkbox-example></it-checkbox-example>

<it-source-display html="{$ html | escape $}" typescript="{$ typescript | escape $}" >
</it-source-display>
