{% from "../../macro.template.njk" import sanitize as sanitize %}

<it-notifications-setup></it-notifications-setup>

{% set htmlExampleType %}
  {% include "../notifications-example-type/notifications-example-type.component.html" %}
{% endset %}

{% set typescriptExampleType %}
  {% include "../notifications-example-type/notifications-example-type.component.ts" %}
{% endset %}

<it-notifications-example-type></it-notifications-example-type>

<it-source-display html="{$ sanitize(htmlExampleType) $}" typescript="{$ sanitize(typescriptExampleType) $}"></it-source-display>


{% set htmlExample %}
  {% include "../notifications-example/notifications-example.component.html" %}
{% endset %}

{% set typescriptExample %}
  {% include "../notifications-example/notifications-example.component.ts" %}
{% endset %}

<it-notifications-example></it-notifications-example>

<it-source-display html="{$ sanitize(htmlExample) $}" typescript="{$ sanitize(typescriptExample) $}"></it-source-display>
