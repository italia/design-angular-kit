{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set htmlSetup %}
  {% include "../notifications-setup/notifications-setup.component.html" %}
{% endset %}

{% set typescriptSetup %}
  {% include "../notifications-setup/notifications-setup.component.ts" %}
{% endset %}

<it-notifications-setup></it-notifications-setup>

<it-source-display html="{$ sanitize(htmlSetup) $}" typescript="{$ sanitize(typescriptSetup) $}"></it-source-display>


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
