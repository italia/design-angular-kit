{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set html %}
  {% include "../spinner-single-example/spinner-single-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../spinner-single-example/spinner-single-example.component.ts" %}
{% endset %}

<it-spinner-single-example></it-spinner-single-example>

<it-source-display html="{$ sanitize(html) $}" typescript="{$ sanitize(typescript) $}"></it-source-display>


{% set htmlDouble %}
  {% include "../spinner-double-example/spinner-double-example.component.html" %}
{% endset %}

{% set typescriptDouble %}
  {% include "../spinner-double-example/spinner-double-example.component.ts" %}
{% endset %}

<it-spinner-double-example></it-spinner-double-example>

<it-source-display html="{$ sanitize(htmlDouble) $}" typescript="{$ sanitize(typescriptDouble) $}"></it-source-display>
