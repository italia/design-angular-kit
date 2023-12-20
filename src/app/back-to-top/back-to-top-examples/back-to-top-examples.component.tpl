{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set linkHtml %}
  {% include "../back-to-top-button/back-to-top-button.component.html" %}
{% endset %}

{% set linkTs %}
  {% include "../back-to-top-button/back-to-top-button.component.ts" %}
{% endset %}

<it-back-to-top-button></it-back-to-top-button>

<it-source-display html="{$ sanitize(linkHtml) $}"  typescript="{$ sanitize(linkTs) $}" >
</it-source-display>
