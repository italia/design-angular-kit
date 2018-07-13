{% set html %}
  {% include "../popover-example/popover-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../popover-example/popover-example.component.ts" %}
{% endset %}

<it-popover-example></it-popover-example>

<it-source-display html="{{ html | escape }}" typescript="{{ typescript | escape }}">
</it-source-display>
