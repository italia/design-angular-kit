{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set htmlColor %}
  {% include "../navscroll-default-example/navscroll-default-example.component.html" %}
{% endset %}

{% set typescriptColor %}
  {% include "../navscroll-default-example/navscroll-default-example.component.ts" %}
{% endset %}

<it-navscroll-default-example></it-navscroll-default-example>

<it-source-display html="{$ sanitize(htmlColor) $}" typescript="{$ sanitize(typescriptColor) $}" >
</it-source-display>
