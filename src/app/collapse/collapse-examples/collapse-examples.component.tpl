{% set html %}
  {% include "../collapse-example/collapse-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../collapse-example/collapse-example.component.ts" %}
{% endset %}

{% set groupHtml %}
  {% include "../collapse-group-example/collapse-group-example.component.html" %}
{% endset %}

{% set groupTs %}
  {% include "../collapse-group-example/collapse-group-example.component.ts" %}
{% endset %}

{% set groupHtml %}
  {% include "../collapse-nested-example/collapse-nested-example.component.html" %}
{% endset %}

{% set groupTs %}
  {% include "../collapse-nested-example/collapse-nested-example.component.ts" %}
{% endset %}

<it-collapse-example></it-collapse-example>

<it-source-display 
    html="{$ html | replace("\{\{", "/\{/\{") | replace("\}\}", "/\}/\}") $}" 
    typescript="{$ typescript | replace("\{\{", "/\{/\{") | replace("\}\}", "/\}/\}") $}" >
</it-source-display>

<it-collapse-group-example></it-collapse-group-example>

<it-source-display 
    html="{$ groupHtml | replace("\{\{", "/\{/\{") | replace("\}\}", "/\}/\}") $}" 
    typescript="{$ groupTs | replace("\{\{", "/\{/\{") | replace("\}\}", "/\}/\}") $}" >
</it-source-display>

<it-collapse-nested-example></it-collapse-nested-example>

<it-source-display 
    html="{$ html | replace("\{\{", "/\{/\{") | replace("\}\}", "/\}/\}") $}" 
    typescript="{$ typescript | replace("\{\{", "/\{/\{") | replace("\}\}", "/\}/\}") $}" >
</it-source-display>