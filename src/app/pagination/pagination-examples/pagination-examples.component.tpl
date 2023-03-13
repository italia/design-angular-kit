{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set html %}
  {% include "../pagination-example/pagination-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../pagination-example/pagination-example.component.ts" %}
{% endset %}

<it-pagination-example></it-pagination-example>

<it-source-display html="{$ sanitize(html) $}" typescript="{$ sanitize(typescript) $}"></it-source-display>


{% set htmlChanger %}
  {% include "../pagination-changer-example/pagination-changer-example.component.html" %}
{% endset %}

{% set typescriptChanger %}
  {% include "../pagination-changer-example/pagination-changer-example.component.ts" %}
{% endset %}

<it-pagination-changer-example></it-pagination-changer-example>

<it-source-display html="{$ sanitize(htmlChanger) $}" typescript="{$ sanitize(typescriptChanger) $}"></it-source-display>


{% set htmlJump %}
  {% include "../pagination-jump-example/pagination-jump-example.component.html" %}
{% endset %}

{% set typescriptJump %}
  {% include "../pagination-jump-example/pagination-jump-example.component.ts" %}
{% endset %}

<it-pagination-jump-example></it-pagination-jump-example>

<it-source-display html="{$ sanitize(htmlJump) $}" typescript="{$ sanitize(typescriptJump) $}"></it-source-display>


{% set htmlSimple %}
  {% include "../pagination-simple-example/pagination-simple-example.component.html" %}
{% endset %}

{% set typescriptSimple %}
  {% include "../pagination-simple-example/pagination-simple-example.component.ts" %}
{% endset %}

<it-pagination-simple-example></it-pagination-simple-example>

<it-source-display html="{$ sanitize(htmlSimple) $}" typescript="{$ sanitize(typescriptSimple) $}"></it-source-display>


{% set htmlTextLinks %}
  {% include "../pagination-text-links-example/pagination-text-links-example.component.html" %}
{% endset %}

{% set typescriptTextLinks %}
  {% include "../pagination-text-links-example/pagination-text-links-example.component.ts" %}
{% endset %}

<it-pagination-text-links-example></it-pagination-text-links-example>

<it-source-display html="{$ sanitize(htmlTextLinks) $}" typescript="{$ sanitize(typescriptTextLinks) $}"></it-source-display>


{% set htmlTotalNumber %}
  {% include "../pagination-total-number-example/pagination-total-number-example.component.html" %}
{% endset %}

{% set typescriptTotalNumber %}
  {% include "../pagination-total-number-example/pagination-total-number-example.component.ts" %}
{% endset %}

<it-pagination-total-number-example></it-pagination-total-number-example>

<it-source-display html="{$ sanitize(htmlTotalNumber) $}" typescript="{$ sanitize(typescriptTotalNumber) $}"></it-source-display>
