{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set html %}
  {% include "../password-input-example/password-input-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../password-input-example/password-input-example.component.ts" %}
{% endset %}

<it-password-input-example></it-password-input-example>

<it-source-display html="{$ sanitize(html) $}" typescript="{$ sanitize(typescript) $}"></it-source-display>

{% set htmlValidation %}
  {% include "../password-input-validation-example/password-input-validation-example.component.html" %}
{% endset %}

{% set typescriptValidation %}
  {% include "../password-input-validation-example/password-input-validation-example.component.ts" %}
{% endset %}

<it-password-input-validation-example></it-password-input-validation-example>

<it-source-display html="{$ sanitize(htmlValidation) $}" typescript="{$ sanitize(typescriptValidation) $}"></it-source-display>

{% set htmlConfirm %}
  {% include "../password-input-confirm-example/password-input-confirm-example.component.html" %}
{% endset %}

{% set typescriptConfirm %}
  {% include "../password-input-confirm-example/password-input-confirm-example.component.ts" %}
{% endset %}

<it-password-input-confirm-example></it-password-input-confirm-example>

<it-source-display html="{$ sanitize(htmlConfirm) $}" typescript="{$ sanitize(typescriptConfirm) $}"></it-source-display>
