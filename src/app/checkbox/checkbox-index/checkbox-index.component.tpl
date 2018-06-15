{% set html %}
  {% include "../checkbox-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../checkbox-example.component.ts" %}
{% endset %}

<it-example html="{{ html | escape }}" typescript="{{ typescript | escape }}" >
</it-example>
