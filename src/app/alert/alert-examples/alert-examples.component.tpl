{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set htmlColor %}
  {% include "../alert-color-example/alert-color-example.component.html" %}
{% endset %}

{% set typescriptColor %}
  {% include "../alert-color-example/alert-color-example.component.ts" %}
{% endset %}

<it-alert-color-example></it-alert-color-example>

<it-source-display html="{$ sanitize(htmlColor) $}" typescript="{$ sanitize(typescriptColor) $}" >
</it-source-display>


{% set htmlContent %}
  {% include "../alert-additional-content-example/alert-additional-content-example.component.html" %}
{% endset %}

{% set typescriptContent %}
  {% include "../alert-additional-content-example/alert-additional-content-example.component.ts" %}
{% endset %}

<it-alert-additional-content-example></it-alert-additional-content-example>

<it-source-display html="{$ sanitize(htmlContent) $}" typescript="{$ sanitize(typescriptContent) $}" >
</it-source-display>


{% set htmlClosing %}
  {% include "../alert-closing-example/alert-closing-example.component.html" %}
{% endset %}

{% set typescriptClosing %}
  {% include "../alert-closing-example/alert-closing-example.component.ts" %}
{% endset %}

<it-alert-closing-example></it-alert-closing-example>

<it-source-display html="{$ sanitize(htmlClosing) $}" typescript="{$ sanitize(typescriptClosing) $}" >
</it-source-display>
