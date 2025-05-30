{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set linkHtml %}
  {% include "../footer-simple/footer-simple.component.html" %}
{% endset %}

{% set linkTs %}
  {% include "../footer-simple/footer-simple.component.ts" %}
{% endset %}

<it-footer-simple></it-footer-simple>

<it-source-display html="{$ sanitize(linkHtml) $}"  typescript="{$ sanitize(linkTs) $}" >
</it-source-display>
