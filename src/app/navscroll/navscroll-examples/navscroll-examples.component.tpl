{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set htmlColor %}
  {% include "../navscroll-default-example/navscroll-default-example.component.html" %}
{% endset %}

{% set typescriptColor %}
  {% include "../navscroll-default-example/navscroll-default-example.component.ts" %}
{% endset %}

<h3>Esempio di default</h3>
<!-- <it-navscroll-default-example></it-navscroll-default-example> -->

<it-source-display html="{$ sanitize(htmlColor) $}" typescript="{$ sanitize(typescriptColor) $}" >
</it-source-display>

{% set customTemplateHtmlColor %}
  {% include "../navscroll-custom-template-example/navscroll-custom-template-example.component.html" %}
{% endset %}

{% set customTemplateTypescriptColor %}
  {% include "../navscroll-custom-template-example/navscroll-custom-template-example.component.ts" %}
{% endset %}

<h3>Esempio con template personalizzato</h3>
<!-- <it-navscroll-custom-template-example></it-navscroll-custom-template-example> -->

<it-source-display html="{$ sanitize(customTemplateHtmlColor) $}" typescript="{$ sanitize(customTemplateTypescriptColor) $}" >
</it-source-display>

