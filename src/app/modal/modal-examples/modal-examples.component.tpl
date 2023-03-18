{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set html %}
  {% include "../modal-example/modal-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../modal-example/modal-example.component.ts" %}
{% endset %}

<it-modal-example></it-modal-example>

<it-source-display html="{$ sanitize(html) $}" typescript="{$ sanitize(typescript) $}"></it-source-display>

{% set htmlIcon %}
  {% include "../modal-icon-example/modal-icon-example.component.html" %}
{% endset %}

{% set typescriptIcon %}
  {% include "../modal-icon-example/modal-icon-example.component.ts" %}
{% endset %}

<it-modal-icon-example></it-modal-icon-example>

<it-source-display html="{$ sanitize(htmlIcon) $}" typescript="{$ sanitize(typescriptIcon) $}"></it-source-display>

{% set htmlRadio %}
  {% include "../modal-radio-example/modal-radio-example.component.html" %}
{% endset %}

{% set typescriptRadio %}
  {% include "../modal-radio-example/modal-radio-example.component.ts" %}
{% endset %}

<it-modal-radio-example></it-modal-radio-example>

<it-source-display html="{$ sanitize(htmlRadio) $}" typescript="{$ sanitize(typescriptRadio) $}"></it-source-display>

{% set htmlList %}
  {% include "../modal-list-example/modal-list-example.component.html" %}
{% endset %}

{% set typescriptList %}
  {% include "../modal-list-example/modal-list-example.component.ts" %}
{% endset %}

<it-modal-list-example></it-modal-list-example>

<it-source-display html="{$ sanitize(htmlList) $}" typescript="{$ sanitize(typescriptList) $}"></it-source-display>


{% set htmlPopconfirm %}
  {% include "../modal-popconfirm-example/modal-popconfirm-example.component.html" %}
{% endset %}

{% set typescriptPopconfirm %}
  {% include "../modal-popconfirm-example/modal-popconfirm-example.component.ts" %}
{% endset %}

<it-modal-popconfirm-example></it-modal-popconfirm-example>

<it-source-display html="{$ sanitize(htmlPopconfirm) $}" typescript="{$ sanitize(typescriptPopconfirm) $}"></it-source-display>


{% set htmlScroll %}
  {% include "../modal-scroll-example/modal-scroll-example.component.html" %}
{% endset %}

{% set typescriptScroll %}
  {% include "../modal-scroll-example/modal-scroll-example.component.ts" %}
{% endset %}

<it-modal-scroll-example></it-modal-scroll-example>

<it-source-display html="{$ sanitize(htmlScroll) $}" typescript="{$ sanitize(typescriptScroll) $}"></it-source-display>


{% set htmlAlignment %}
  {% include "../modal-alignment-example/modal-alignment-example.component.html" %}
{% endset %}

{% set typescriptAlignment %}
  {% include "../modal-alignment-example/modal-alignment-example.component.ts" %}
{% endset %}

<it-modal-alignment-example></it-modal-alignment-example>

<it-source-display html="{$ sanitize(htmlAlignment) $}" typescript="{$ sanitize(typescriptAlignment) $}"></it-source-display>


{% set htmlSize %}
  {% include "../modal-size-example/modal-size-example.component.html" %}
{% endset %}

{% set typescriptSize %}
  {% include "../modal-size-example/modal-size-example.component.ts" %}
{% endset %}

<it-modal-size-example></it-modal-size-example>

<it-source-display html="{$ sanitize(htmlSize) $}" typescript="{$ sanitize(typescriptSize) $}"></it-source-display>
