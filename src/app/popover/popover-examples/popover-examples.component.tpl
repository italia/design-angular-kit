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

{% set eventsHtml %}
  {% include "../popover-events-example/popover-events-example.component.html" %}
{% endset %}

{% set eventsTs %}
  {% include "../popover-events-example/popover-events-example.component.ts" %}
{% endset %}

{% set configHtml %}
  {% include "../popover-config-example/popover-config-example.component.html" %}
{% endset %}

{% set configTs %}
  {% include "../popover-config-example/popover-config-example.component.ts" %}
{% endset %}

<it-popover-example></it-popover-example>

<it-source-display 
  html="{$ html | replace("\{\{", "/\{/\{") | replace("\}\}", "/\}/\}") $}" 
  typescript="{$ typescript | replace("\{\{", "/\{/\{") | replace("\}\}", "/\}/\}") $}" >
</it-source-display>

<it-popover-container-example></it-popover-container-example>

<it-source-display 
  html="{$ containerHtml | replace("\{\{", "/\{/\{") | replace("\}\}", "/\}/\}") $}" 
  typescript="{$ containerTs | replace("\{\{", "/\{/\{") | replace("\}\}", "/\}/\}") $}" >
</it-source-display>

<it-popover-placements-example></it-popover-placements-example>

<it-source-display 
  html="{$ placementsHtml | replace("\{\{", "/\{/\{") | replace("\}\}", "/\}/\}") $}" 
  typescript="{$ placementsTs | replace("\{\{", "/\{/\{") | replace("\}\}", "/\}/\}") $}" >
</it-source-display>

<it-popover-focus-example></it-popover-focus-example>

<it-source-display 
  html="{$ focusHtml | replace("\{\{", "/\{/\{") | replace("\}\}", "/\}/\}") $}" 
  typescript="{$ focusTs | replace("\{\{", "/\{/\{") | replace("\}\}", "/\}/\}") $}" >
</it-source-display>

<it-popover-disabled-example></it-popover-disabled-example>

<it-source-display 
  html="{$ disabledHtml | replace("\{\{", "/\{/\{") | replace("\}\}", "/\}/\}") $}" 
  typescript="{$ disabledTs | replace("\{\{", "/\{/\{") | replace("\}\}", "/\}/\}") $}" >
</it-source-display>

<it-popover-events-example></it-popover-events-example>

<it-source-display 
  html="{$ eventsHtml | replace("\{\{", "/\{/\{") | replace("\}\}", "/\}/\}") $}" 
  typescript="{$ eventsTs | replace("\{\{", "/\{/\{") | replace("\}\}", "/\}/\}") $}" >
</it-source-display>

<it-popover-config-example></it-popover-config-example>

<it-source-display 
  html="{$ configHtml | replace("\{\{", "/\{/\{") | replace("\}\}", "/\}/\}") $}" 
  typescript="{$ configTs | replace("\{\{", "/\{/\{") | replace("\}\}", "/\}/\}") $}" >
</it-source-display>