{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set html %}
  {% include "../table-example/table-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../table-example/table-example.component.ts" %}
{% endset %}

<it-table-example></it-table-example>

<it-source-display html="{$ sanitize(html) $}" typescript="{$ sanitize(typescript) $}"></it-source-display>


{% set htmlStriped %}
  {% include "../table-striped-example/table-striped-example.component.html" %}
{% endset %}

{% set typescriptStriped %}
  {% include "../table-striped-example/table-striped-example.component.ts" %}
{% endset %}

<it-table-striped-example></it-table-striped-example>

<it-source-display html="{$ sanitize(htmlStriped) $}" typescript="{$ sanitize(typescriptStriped) $}"></it-source-display>


{% set htmlHover %}
  {% include "../table-hover-example/table-hover-example.component.html" %}
{% endset %}

{% set typescriptHover %}
  {% include "../table-hover-example/table-hover-example.component.ts" %}
{% endset %}

<it-table-hover-example></it-table-hover-example>

<it-source-display html="{$ sanitize(htmlHover) $}" typescript="{$ sanitize(typescriptHover) $}"></it-source-display>


{% set htmlBordered %}
  {% include "../table-bordered-example/table-bordered-example.component.html" %}
{% endset %}

{% set typescriptBordered %}
  {% include "../table-bordered-example/table-bordered-example.component.ts" %}
{% endset %}

<it-table-bordered-example></it-table-bordered-example>

<it-source-display html="{$ sanitize(htmlBordered) $}" typescript="{$ sanitize(typescriptBordered) $}"></it-source-display>


{% set htmlBorderless %}
  {% include "../table-borderless-example/table-borderless-example.component.html" %}
{% endset %}

{% set typescriptBorderless %}
  {% include "../table-borderless-example/table-borderless-example.component.ts" %}
{% endset %}

<it-table-borderless-example></it-table-borderless-example>

<it-source-display html="{$ sanitize(htmlBorderless) $}" typescript="{$ sanitize(typescriptBorderless) $}"></it-source-display>


{% set htmlCompact %}
  {% include "../table-compact-example/table-compact-example.component.html" %}
{% endset %}

{% set typescriptCompact %}
  {% include "../table-compact-example/table-compact-example.component.ts" %}
{% endset %}

<it-table-compact-example></it-table-compact-example>

<it-source-display html="{$ sanitize(htmlCompact) $}" typescript="{$ sanitize(typescriptCompact) $}"></it-source-display>


{% set htmlAlignment %}
  {% include "../table-alignment-example/table-alignment-example.component.html" %}
{% endset %}

{% set typescriptAlignment %}
  {% include "../table-alignment-example/table-alignment-example.component.ts" %}
{% endset %}

<it-table-alignment-example></it-table-alignment-example>

<it-source-display html="{$ sanitize(htmlAlignment) $}" typescript="{$ sanitize(typescriptAlignment) $}"></it-source-display>


{% set htmlHeader %}
  {% include "../table-header-example/table-header-example.component.html" %}
{% endset %}

{% set typescriptHeader %}
  {% include "../table-header-example/table-header-example.component.ts" %}
{% endset %}

<it-table-header-example></it-table-header-example>

<it-source-display html="{$ sanitize(htmlHeader) $}" typescript="{$ sanitize(typescriptHeader) $}"></it-source-display>


{% set htmlFooter %}
  {% include "../table-footer-example/table-footer-example.component.html" %}
{% endset %}

{% set typescriptFooter %}
  {% include "../table-footer-example/table-footer-example.component.ts" %}
{% endset %}

<it-table-footer-example></it-table-footer-example>

<it-source-display html="{$ sanitize(htmlFooter) $}" typescript="{$ sanitize(typescriptFooter) $}"></it-source-display>


{% set htmlCaption %}
  {% include "../table-caption-example/table-caption-example.component.html" %}
{% endset %}

{% set typescriptCaption %}
  {% include "../table-caption-example/table-caption-example.component.ts" %}
{% endset %}

<it-table-caption-example></it-table-caption-example>

<it-source-display html="{$ sanitize(htmlCaption) $}" typescript="{$ sanitize(typescriptCaption) $}"></it-source-display>
