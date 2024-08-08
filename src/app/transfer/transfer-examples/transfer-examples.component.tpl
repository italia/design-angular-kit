{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set html %}
  {% include "../transfer-default-example/transfer-default-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../transfer-default-example/transfer-default-example.component.ts" %}
{% endset %}

<it-transfer-default-example></it-transfer-default-example>

<it-source-display html="{$ sanitize(html) $}" typescript="{$ sanitize(typescript) $}"></it-source-display>

{% set html %}
  {% include "../transfer-template-form-example/transfer-template-form-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../transfer-template-form-example/transfer-template-form-example.component.ts" %}
{% endset %}

<it-transfer-template-form-example></it-transfer-template-form-example>

<it-source-display html="{$ sanitize(html) $}" typescript="{$ sanitize(typescript) $}"></it-source-display>

{% set html %}
  {% include "../transfer-reactive-form-example/transfer-reactive-form-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../transfer-reactive-form-example/transfer-reactive-form-example.component.ts" %}
{% endset %}

<it-transfer-reactive-form-example></it-transfer-reactive-form-example>

<it-source-display html="{$ sanitize(html) $}" typescript="{$ sanitize(typescript) $}"></it-source-display>