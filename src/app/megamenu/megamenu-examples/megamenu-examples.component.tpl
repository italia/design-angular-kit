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

{% set htmlCTABottom %}
  {% include "../megamenu-cta-bottom/megamenu-cta-bottom.component.html" %}
{% endset %}

{% set typescriptCTABottom %}
  {% include "../megamenu-cta-bottom/megamenu-cta-bottom.component.ts" %}
{% endset %}

<it-megamenu-cta-bottom></it-megamenu-cta-bottom>

<it-source-display html="{$ sanitize(htmlCTABottom) $}" typescript="{$ sanitize(typescriptCTABottom) $}" >
</it-source-display>

{% set htmlCTAright %}
  {% include "../megamenu-cta-right/megamenu-cta-right.component.html" %}
{% endset %}

{% set typescriptCTAright %}
  {% include "../megamenu-cta-right/megamenu-cta-right.component.ts" %}
{% endset %}

<it-megamenu-cta-right></it-megamenu-cta-right>

<it-source-display html="{$ sanitize(htmlCTAright) $}" typescript="{$ sanitize(typescriptCTAright) $}" >
</it-source-display>