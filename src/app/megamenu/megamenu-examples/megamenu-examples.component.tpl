{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set htmlExample %}
  {% include "../megamenu-example/megamenu-example.component.html" %}
{% endset %}

{% set typescriptExample %}
  {% include "../megamenu-example/megamenu-example.component.ts" %}
{% endset %}

<it-megamenu-example></it-megamenu-example>

<it-source-display html="{$ sanitize(htmlExample) $}" typescript="{$ sanitize(typescriptExample) $}" >
</it-source-display>
