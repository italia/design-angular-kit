{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set html %}
  {% include "../dropdown-example/dropdown-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../dropdown-example/dropdown-example.component.ts" %}
{% endset %}

<it-dropdown-example></it-dropdown-example>

<it-source-display html="{$ sanitize(html) $}" typescript="{$ sanitize(typescript) $}"></it-source-display>

{% set htmlLink %}
  {% include "../dropdown-link-example/dropdown-link-example.component.html" %}
{% endset %}

{% set typescriptLink %}
  {% include "../dropdown-link-example/dropdown-link-example.component.ts" %}
{% endset %}

<it-dropdown-link-example></it-dropdown-link-example>

<it-source-display html="{$ sanitize(htmlLink) $}" typescript="{$ sanitize(typescriptLink) $}"></it-source-display>

{% set htmlHostAttribute %}
  {% include "../dropdown-host-attribute/dropdown-host-attribute.component.html" %}
{% endset %}

{% set typescriptHostAttribute %}
  {% include "../dropdown-host-attribute/dropdown-host-attribute.component.ts" %}
{% endset %}

<it-dropdown-host-attribute></it-dropdown-host-attribute>

<it-source-display html="{$ sanitize(htmlHostAttribute) $}" typescript="{$ sanitize(typescriptHostAttribute) $}"></it-source-display>
