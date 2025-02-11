{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set html %}
  {% include "../skiplink-example/skiplink-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../skiplink-example/skiplink-example.component.ts" %}
{% endset %}


<it-skiplink-example></it-skiplink-example>

<it-source-display html="{$ sanitize(html) $}" typescript="{$ sanitize(typescript) $}" >
</it-source-display>

