{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set htmlComponent %}
  {% include "../accordion-component-example/accordion-component-example.component.html" %}
{% endset %}

{% set typescriptComponent %}
  {% include "../accordion-component-example/accordion-component-example.component.ts" %}
{% endset %}

<it-accordion-component-example></it-accordion-component-example>

<it-source-display html="{$ sanitize(htmlComponent) $}" typescript="{$ sanitize(typescriptComponent) $}"></it-source-display>

