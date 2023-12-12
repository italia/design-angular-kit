{% from "../../macro.template.njk" import sanitize as sanitize %}

<it-error-page-route-example></it-error-page-route-example>


{% set htmlComponent %}
  {% include "../error-page-component-example/error-page-component-example.component.html" %}
{% endset %}

{% set typescriptComponent %}
  {% include "../error-page-component-example/error-page-component-example.component.ts" %}
{% endset %}

<it-error-page-component-example></it-error-page-component-example>

<it-source-display html="{$ sanitize(htmlComponent) $}" typescript="{$ sanitize(typescriptComponent) $}"></it-source-display>

