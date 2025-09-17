{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set htmlExample %}
  {% include "../card-example/card-example.component.html" %}
{% endset %}

{% set typescriptExample %}
  {% include "../card-example/card-example.component.ts" %}
{% endset %}

<it-card-example></it-card-example>

<it-source-display html="{$ sanitize(htmlExample) $}" typescript="{$ sanitize(typescriptExample) $}" >
</it-source-display>


{% set htmlarticle %}
  {% include "../card-article/card-article.component.html" %}
{% endset %}

{% set typescriptarticle %}
  {% include "../card-article/card-article.component.ts" %}
{% endset %}

<it-card-article></it-card-article>

<it-source-display html="{$ sanitize(htmlarticle) $}" typescript="{$ sanitize(typescriptarticle) $}" >
</it-source-display>


{% set htmlicon %}
  {% include "../card-icon/card-icon.component.html" %}
{% endset %}

{% set typescripticon %}
  {% include "../card-icon/card-icon.component.ts" %}
{% endset %}

<it-card-icon></it-card-icon>

<it-source-display html="{$ sanitize(htmlicon) $}" typescript="{$ sanitize(typescripticon) $}" >
</it-source-display>


{% set htmlshadow %}
  {% include "../card-shadow/card-shadow.component.html" %}
{% endset %}

{% set typescriptshadow %}
  {% include "../card-shadow/card-shadow.component.ts" %}
{% endset %}

<it-card-shadow></it-card-shadow>

<it-source-display html="{$ sanitize(htmlshadow) $}" typescript="{$ sanitize(typescriptshadow) $}" >
</it-source-display>
