{% set html %}
  {% include "../checkbox-example/checkbox-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../checkbox-example/checkbox-example.component.ts" %}
{% endset %}

<div html="{{ html | escape }}" typescript="{{ typescript | escape }}" >
</div>
