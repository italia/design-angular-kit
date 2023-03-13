{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set html %}
  {% include "../textarea-example/textarea-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../textarea-example/textarea-example.component.ts" %}
{% endset %}

<it-textarea-example></it-textarea-example>

<it-source-display html="{$ sanitize(html) $}" typescript="{$ sanitize(typescript) $}"></it-source-display>
