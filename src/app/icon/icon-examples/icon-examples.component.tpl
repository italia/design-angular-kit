{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set html %}
  {% include "../icon-example/icon-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../icon-example/icon-example.component.ts" %}
{% endset %}

<it-icon-example></it-icon-example>

<it-source-display html="{$ sanitize(html) $}" typescript="{$ sanitize(typescript) $}"></it-source-display>


{% set htmlSize %}
  {% include "../icon-size-example/icon-size-example.component.html" %}
{% endset %}

{% set typescriptSize %}
  {% include "../icon-size-example/icon-size-example.component.ts" %}
{% endset %}

<it-icon-size-example></it-icon-size-example>

<it-source-display html="{$ sanitize(htmlSize) $}" typescript="{$ sanitize(typescriptSize) $}"></it-source-display>


{% set htmlColor %}
  {% include "../icon-color-example/icon-color-example.component.html" %}
{% endset %}

{% set typescriptColor %}
  {% include "../icon-color-example/icon-color-example.component.ts" %}
{% endset %}

<it-icon-color-example></it-icon-color-example>

<it-source-display html="{$ sanitize(htmlColor) $}" typescript="{$ sanitize(typescriptColor) $}"></it-source-display>


{% set htmlAlignment %}
  {% include "../icon-alignment-example/icon-alignment-example.component.html" %}
{% endset %}

{% set typescriptAlignment %}
  {% include "../icon-alignment-example/icon-alignment-example.component.ts" %}
{% endset %}

<it-icon-alignment-example></it-icon-alignment-example>

<it-source-display html="{$ sanitize(htmlAlignment) $}" typescript="{$ sanitize(typescriptAlignment) $}"></it-source-display>


{% set htmlList %}
  {% include "../icon-list-example/icon-list-example.component.html" %}
{% endset %}

{% set typescriptList %}
  {% include "../icon-list-example/icon-list-example.component.ts" %}
{% endset %}

<it-icon-list-example></it-icon-list-example>

<it-source-display html="{$ sanitize(htmlList) $}" typescript="{$ sanitize(typescriptList) $}"></it-source-display>
