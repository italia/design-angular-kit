{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set htmlExample %}
  {% include "../card-example/card-example.component.html" %}
{% endset %}

{% set typescriptExample %}
  {% include "../card-example/card-example.component.ts" %}
{% endset %}

<it-card-example></it-card-example>

<it-source-display html="{$ sanitize(htmlExample) $}" typescript="{$ sanitize(typescriptExample) $}" >
</it-source-display>

