{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set html %}
  {% include "../form-input-example/form-input-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../form-input-example/form-input-example.component.ts" %}
{% endset %}

{% set tdvHtml %}
  {% include "../template-driven-validation-example/template-driven-validation-example.component.html" %}
{% endset %}

{% set tdvTs %}
  {% include "../template-driven-validation-example/template-driven-validation-example.component.ts" %}
{% endset %}

<it-form-input-example></it-form-input-example>

<it-source-display
  html="{$ sanitize(html) $}"
  typescript="{$ sanitize(typescript) $}" >
</it-source-display>

<it-template-driven-validation-example></it-template-driven-validation-example>

<it-source-display
  html="{$ sanitize(tdvHtml) $}"
  typescript="{$ sanitize(tdvTs) $}">
</it-source-display>
