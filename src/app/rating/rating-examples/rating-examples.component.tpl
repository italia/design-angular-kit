{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set html %}
  {% include "../rating-example/rating-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../rating-example/rating-example.component.ts" %}
{% endset %}

<it-rating-example></it-rating-example>

<it-source-display html="{$ sanitize(html) $}" typescript="{$ sanitize(typescript) $}"></it-source-display>


{% set htmlReadonly %}
  {% include "../rating-example-readonly/rating-example-readonly.component.html" %}
{% endset %}

{% set typescriptReadonly %}
  {% include "../rating-example-readonly/rating-example-readonly.component.ts" %}
{% endset %}

<it-rating-example-readonly></it-rating-example-readonly>

<it-source-display html="{$ sanitize(htmlReadonly) $}" typescript="{$ sanitize(typescriptReadonly) $}"></it-source-display>

