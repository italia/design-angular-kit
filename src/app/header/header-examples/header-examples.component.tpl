{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set html %}
  {% include "../header-example/header-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../header-example/header-example.component.ts" %}
{% endset %}

<it-header-example></it-header-example>

<it-source-display html="{$ sanitize(html) $}" typescript="{$ sanitize(typescript) $}" >
</it-source-display>
