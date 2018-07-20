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

<it-tooltip-example></it-tooltip-example>

<it-source-display html="{$ html | replace("\{\{", "/\{/\{") | replace("\}\}", "/\}/\}") $}"
  typescript="{$ typescript | replace("\{\{", "/\{/\{") | replace("\}\}", "/\}/\}") $}" >
</it-source-display>

<it-tooltip-placements-example></it-tooltip-placements-example>

<it-source-display html="{$ placementsHtml | replace("\{\{", "/\{/\{") | replace("\}\}", "/\}/\}") $}" 
  typescript="{$ placementsTs | replace("\{\{", "/\{/\{") | replace("\}\}", "/\}/\}") $}" >
</it-source-display>

<it-tooltip-disabled-example></it-tooltip-disabled-example>

<it-source-display html="{$ disabledHtml | replace("\{\{", "/\{/\{") | replace("\}\}", "/\}/\}") $}"
  typescript="{$ disabledTs | replace("\{\{", "/\{/\{") | replace("\}\}", "/\}/\}") $}" >
</it-source-display>

<it-tooltip-events-example></it-tooltip-events-example>

<it-source-display html="{$ eventsHtml | replace("\{\{", "/\{/\{") | replace("\}\}", "/\}/\}") $}"
  typescript="{$ eventsTs | replace("\{\{", "/\{/\{") | replace("\}\}", "/\}/\}") $}" >
</it-source-display>