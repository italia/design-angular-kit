{% set html %}
  {% include "../progress-bar-example/progress-bar-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../progress-bar-example/progress-bar-example.component.ts" %}
{% endset %}

<it-progress-bar-example></it-progress-bar-example>

<it-source-display html="{{ html | escape }}" typescript="{{ typescript | escape }}" >
</it-source-display>
