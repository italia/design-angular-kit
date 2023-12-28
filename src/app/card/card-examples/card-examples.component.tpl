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


{% set htmlbig %}
  {% include "../card-big/card-big.component.html" %}
{% endset %}

{% set typescriptbig %}
  {% include "../card-big/card-big.component.ts" %}
{% endset %}

<it-card-big></it-card-big>

<it-source-display html="{$ sanitize(htmlbig) $}" typescript="{$ sanitize(typescriptbig) $}" >
</it-source-display>


{% set htmlcta %}
  {% include "../card-cta/card-cta.component.html" %}
{% endset %}

{% set typescriptcta %}
  {% include "../card-cta/card-cta.component.ts" %}
{% endset %}

<it-card-cta></it-card-cta>

<it-source-display html="{$ sanitize(htmlcta) $}" typescript="{$ sanitize(typescriptcta) $}" >
</it-source-display>


{% set htmlimage %}
  {% include "../card-image/card-image.component.html" %}
{% endset %}

{% set typescriptimage %}
  {% include "../card-image/card-image.component.ts" %}
{% endset %}

<it-card-image></it-card-image>

<it-source-display html="{$ sanitize(htmlimage) $}" typescript="{$ sanitize(typescriptimage) $}" >
</it-source-display>



{% set htmlspecial %}
  {% include "../card-special/card-special.component.html" %}
{% endset %}

{% set typescriptspecial %}
  {% include "../card-special/card-special.component.ts" %}
{% endset %}

<it-card-special></it-card-special>

<it-source-display html="{$ sanitize(htmlspecial) $}" typescript="{$ sanitize(typescriptspecial) $}" >
</it-source-display>


{% set htmlteaser %}
  {% include "../card-teaser/card-teaser.component.html" %}
{% endset %}

{% set typescriptteaser %}
  {% include "../card-teaser/card-teaser.component.ts" %}
{% endset %}

<it-card-teaser></it-card-teaser>

<it-source-display html="{$ sanitize(htmlteaser) $}" typescript="{$ sanitize(typescriptteaser) $}" >
</it-source-display>