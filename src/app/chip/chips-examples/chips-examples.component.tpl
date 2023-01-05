{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set colorsHtml %}
  {% include "../chips-colors/chips-colors.component.html" %}
{% endset %}

{% set colorsTs %}
  {% include "../chips-colors/chips-colors.component.ts" %}
{% endset %}

<it-chips-colors></it-chips-colors>

<it-source-display html="{$ sanitize(colorsHtml) $}"  typescript="{$ sanitize(colorsTs) $}" >
</it-source-display>