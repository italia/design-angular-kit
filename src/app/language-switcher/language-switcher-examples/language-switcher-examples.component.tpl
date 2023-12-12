{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set html %}
  {% include "../language-switcher-example/language-switcher-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../language-switcher-example/language-switcher-example.component.ts" %}
{% endset %}

<it-language-switcher-example></it-language-switcher-example>

<it-source-display html="{$ sanitize(html) $}" typescript="{$ sanitize(typescript) $}"></it-source-display>


<div class="my-5">
  <p>Puoi aggiungere altre lingue aggiungendo nel tuo <span class="text-muted">app.module.ts</span></p>
  <it-source-display [typescript]="typescriptAppModule"></it-source-display>
</div>

{% set htmlCustom %}
  {% include "../language-switcher-custom-example/language-switcher-custom-example.component.html" %}
{% endset %}

{% set typescriptCustom %}
  {% include "../language-switcher-custom-example/language-switcher-custom-example.component.ts" %}
{% endset %}

<it-language-switcher-custom-example></it-language-switcher-custom-example>

<it-source-display html="{$ sanitize(htmlCustom) $}" typescript="{$ sanitize(typescriptCustom) $}"></it-source-display>
