{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set html %}
  {% include "../tooltip-example/tooltip-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../tooltip-example/tooltip-example.component.ts" %}
{% endset %}

{% set placementsHtml %}
  {% include "../tooltip-placements-example/tooltip-placements-example.component.html" %}
{% endset %}

{% set placementsTs %}
  {% include "../tooltip-placements-example/tooltip-placements-example.component.ts" %}
{% endset %}

{% set disabledHtml %}
  {% include "../tooltip-disabled-example/tooltip-disabled-example.component.html" %}
{% endset %}

{% set disabledTs %}
  {% include "../tooltip-disabled-example/tooltip-disabled-example.component.ts" %}
{% endset %}

{% set eventsHtml %}
  {% include "../tooltip-events-example/tooltip-events-example.component.html" %}
{% endset %}

{% set eventsTs %}
  {% include "../tooltip-events-example/tooltip-events-example.component.ts" %}
{% endset %}

{% set configHtml %}
  {% include "../tooltip-config-example/tooltip-config-example.component.html" %}
{% endset %}

{% set configTs %}
  {% include "../tooltip-config-example/tooltip-config-example.component.ts" %}
{% endset %}

<it-tooltip-example></it-tooltip-example>

<it-source-display html="{$ sanitize(html) $}"
  typescript="{$ sanitize(typescript) $}" >
</it-source-display>

<it-tooltip-placements-example></it-tooltip-placements-example>

<it-source-display html="{$ sanitize(placementsHtml) $}" 
  typescript="{$ sanitize(placementsTs) $}" >
</it-source-display>

<it-tooltip-disabled-example></it-tooltip-disabled-example>

<it-source-display html="{$ sanitize(disabledHtml) $}"
  typescript="{$ sanitize(disabledTs) $}" >
</it-source-display>

<it-tooltip-events-example></it-tooltip-events-example>

<it-source-display html="{$ sanitize(eventsHtml) $}"
  typescript="{$ sanitize(eventsTs) $}" >
</it-source-display>

<it-tooltip-config-example></it-tooltip-config-example>

<it-source-display html="{$ sanitize(configHtml) $}"
  typescript="{$ sanitize(configTs) $}" >
</it-source-display>
