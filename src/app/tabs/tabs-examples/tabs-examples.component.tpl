{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set html %}
  {% include "../tabs-example/tabs-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../tabs-example/tabs-example.component.ts" %}
{% endset %}

{% set htmlDynamic %}
  {% include "../tabs-dynamic-example/tabs-dynamic-example.component.html" %}
{% endset %}

{% set typescriptDynamic %}
  {% include "../tabs-dynamic-example/tabs-dynamic-example.component.ts" %}
{% endset %}

<it-tabs-example></it-tabs-example>

<it-source-display html="{$ sanitize(html) $}" typescript="{$ sanitize(typescript) $}" >
</it-source-display>

<it-tabs-dynamic-example></it-tabs-dynamic-example>

<it-source-display html="{$ sanitize(htmlDynamic) $}" typescript="{$ sanitize(typescriptDynamic) $}" >
</it-source-display>

{% set htmlFullHeight %}
  {% include "../tabs-full-height-example/tabs-full-height-example.component.html" %}
{% endset %}

{% set typescriptFullHeight %}
  {% include "../tabs-full-height-example/tabs-full-height-example.component.ts" %}
{% endset %}

<it-tabs-full-height-example></it-tabs-full-height-example>

<it-source-display html="{$ sanitize(htmlFullHeight) $}" typescript="{$ sanitize(typescriptFullHeight) $}" >
</it-source-display>
