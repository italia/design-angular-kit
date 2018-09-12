{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set interactiveHtml %}
  {% include "../popover-interactive-example/popover-interactive-example.component.html" %}
{% endset %}

{% set interactiveTs %}
  {% include "../popover-interactive-example/popover-interactive-example.component.ts" %}
{% endset %}

{% set html %}
  {% include "../popover-example/popover-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../popover-example/popover-example.component.ts" %}
{% endset %}

{% set containerHtml %}
  {% include "../popover-container-example/popover-container-example.component.html" %}
{% endset %}

{% set containerTs %}
  {% include "../popover-container-example/popover-container-example.component.ts" %}
{% endset %}

{% set placementsHtml %}
  {% include "../popover-placements-example/popover-placements-example.component.html" %}
{% endset %}

{% set placementsTs %}
  {% include "../popover-placements-example/popover-placements-example.component.ts" %}
{% endset %}

{% set focusHtml %}
  {% include "../popover-focus-example/popover-focus-example.component.html" %}
{% endset %}

{% set focusTs %}
  {% include "../popover-focus-example/popover-focus-example.component.ts" %}
{% endset %}

{% set disabledHtml %}
  {% include "../popover-disabled-example/popover-disabled-example.component.html" %}
{% endset %}

{% set disabledTs %}
  {% include "../popover-disabled-example/popover-disabled-example.component.ts" %}
{% endset %}

{% set configHtml %}
  {% include "../popover-config-example/popover-config-example.component.html" %}
{% endset %}

{% set configTs %}
  {% include "../popover-config-example/popover-config-example.component.ts" %}
{% endset %}

<it-popover-interactive-example></it-popover-interactive-example>

<it-source-display 
  html="{$ sanitize(interactiveHtml) $}" 
  typescript="{$ sanitize(interactiveTs) $}" >
</it-source-display>

<it-popover-example></it-popover-example>

<it-source-display 
  html="{$ sanitize(html) $}" 
  typescript="{$ sanitize(typescript) $}" >
</it-source-display>

<it-popover-container-example></it-popover-container-example>

<it-source-display 
  html="{$ sanitize(containerHtml) $}" 
  typescript="{$ sanitize(containerTs) $}" >
</it-source-display>

<it-popover-placements-example></it-popover-placements-example>

<it-source-display 
  html="{$ sanitize(placementsHtml) $}" 
  typescript="{$ sanitize(placementsTs) $}" >
</it-source-display>

<it-popover-focus-example></it-popover-focus-example>

<it-source-display 
  html="{$ sanitize(focusHtml) $}" 
  typescript="{$ sanitize(focusTs) $}" >
</it-source-display>

<it-popover-disabled-example></it-popover-disabled-example>

<it-source-display 
  html="{$ sanitize(disabledHtml) $}" 
  typescript="{$ sanitize(disabledTs) $}" >
</it-source-display>

<it-popover-config-example></it-popover-config-example>

<it-source-display 
  html="{$ sanitize(configHtml) $}" 
  typescript="{$ sanitize(configTs) $}" >
</it-source-display>
