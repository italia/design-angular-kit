{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set html %}
  {% include "../range-example/range-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../range-example/range-example.component.ts" %}
{% endset %}

<it-range-example></it-range-example>

<it-source-display html="{$ sanitize(html) $}" typescript="{$ sanitize(typescript) $}"></it-source-display>


{% set htmlCustomColors %}
  {% include "../range-custom-colors/range-custom-colors.component.html" %}
{% endset %}

{% set typescriptCustomColors %}
  {% include "../range-custom-colors/range-custom-colors.component.ts" %}
{% endset %}

<it-range-custom-colors></it-range-custom-colors>

<it-source-display html="{$ sanitize(htmlCustomColors) $}" typescript="{$ sanitize(typescriptCustomColors) $}"></it-source-display>
