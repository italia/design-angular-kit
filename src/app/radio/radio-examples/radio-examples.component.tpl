{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set html %}
  {% include "../radio-example/radio-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../radio-example/radio-example.component.ts" %}
{% endset %}

{% set htmlChecked %}
  {% include "../radio-checked-example/radio-checked-example.component.html" %}
{% endset %}

{% set typescriptChecked %}
  {% include "../radio-checked-example/radio-checked-example.component.ts" %}
{% endset %}

<it-radio-example></it-radio-example>

<it-source-display html="{$ sanitize(html) $}" typescript="{$ sanitize(typescript) $}" >
</it-source-display>

<it-radio-checked-example></it-radio-checked-example>

<it-source-display html="{$ sanitize(htmlChecked) $}" typescript="{$ sanitize(typescriptChecked) $}" >
</it-source-display>
