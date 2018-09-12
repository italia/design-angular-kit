{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set html %}
  {% include "../breadcrumb-example/breadcrumb-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../breadcrumb-example/breadcrumb-example.component.ts" %}
{% endset %}

<it-breadcrumb-example></it-breadcrumb-example>

<it-source-display html="{$ sanitize(html) $}" typescript="{$ sanitize(typescript) $}" >
</it-source-display>
