{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set linkHtml %}
  {% include "../back-button-link/back-button-link.component.html" %}
{% endset %}

{% set linkTs %}
  {% include "../back-button-link/back-button-link.component.ts" %}
{% endset %}

<it-back-button-link></it-back-button-link>

<it-source-display html="{$ sanitize(linkHtml) $}"  typescript="{$ sanitize(linkTs) $}" >
</it-source-display>

{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set buttonHtml %}
  {% include "../back-button-button/back-button-button.component.html" %}
{% endset %}

{% set buttonTs %}
  {% include "../back-button-button/back-button-button.component.ts" %}
{% endset %}

<it-back-button-button></it-back-button-button>

<it-source-display html="{$ sanitize(buttonHtml) $}"  typescript="{$ sanitize(buttonTs) $}" >
</it-source-display>

{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set onlyIconHtml %}
  {% include "../back-button-only-icon/back-button-only-icon.component.html" %}
{% endset %}

{% set onlyIconTs %}
  {% include "../back-button-only-icon/back-button-only-icon.component.ts" %}
{% endset %}

<it-back-button-only-icon></it-back-button-only-icon>

<it-source-display html="{$ sanitize(onlyIconHtml) $}"  typescript="{$ sanitize(onlyIconTs) $}" >
</it-source-display>