{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set html %}
  {% include "../carousel-example/carousel-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../carousel-example/carousel-example.component.ts" %}
{% endset %}

<it-carousel-example></it-carousel-example>

<it-source-display html="{$ sanitize(html) $}" typescript="{$ sanitize(typescript) $}"></it-source-display>

{% set htmlArticle %}
  {% include "../carousel-article-example/carousel-article-example.component.html" %}
{% endset %}

{% set typescriptArticle %}
  {% include "../carousel-article-example/carousel-article-example.component.ts" %}
{% endset %}

<it-carousel-article-example></it-carousel-article-example>

<it-source-display html="{$ sanitize(htmlArticle) $}" typescript="{$ sanitize(typescriptArticle) $}"></it-source-display>

{% set htmlFeaturedImage %}
  {% include "../carousel-featured-image-example/carousel-featured-image-example.component.html" %}
{% endset %}

{% set typescriptFeaturedImage %}
  {% include "../carousel-featured-image-example/carousel-featured-image-example.component.ts" %}
{% endset %}

<it-carousel-featured-image-example></it-carousel-featured-image-example>

<it-source-display html="{$ sanitize(htmlFeaturedImage) $}" typescript="{$ sanitize(typescriptFeaturedImage) $}"></it-source-display>

{% set htmlImageAbove %}
  {% include "../carousel-image-above-example/carousel-image-above-example.component.html" %}
{% endset %}

{% set typescriptImageAbove %}
  {% include "../carousel-image-above-example/carousel-image-above-example.component.ts" %}
{% endset %}

<it-carousel-image-above-example></it-carousel-image-above-example>

<it-source-display html="{$ sanitize(htmlImageAbove) $}" typescript="{$ sanitize(typescriptImageAbove) $}"></it-source-display>
