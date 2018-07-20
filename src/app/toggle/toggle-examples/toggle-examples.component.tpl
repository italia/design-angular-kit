{% set html %}
  {% include "../toggle-example/toggle-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../toggle-example/toggle-example.component.ts" %}
{% endset %}

<it-toggle-example></it-toggle-example>

<it-source-display html="{$ html $}" typescript="{$ typescript $}" >
</it-source-display>
