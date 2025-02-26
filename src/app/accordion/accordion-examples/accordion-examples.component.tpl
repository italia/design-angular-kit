{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set groupHtml %}
  {% include "../accordion-group-example/accordion-group-example.component.html" %}
{% endset %}

{% set groupTs %}
  {% include "../accordion-group-example/accordion-group-example.component.ts" %}
{% endset %}

{% set groupNestedHtml %}
  {% include "../accordion-nested-example/accordion-nested-example.component.html" %}
{% endset %}

{% set groupNestedTs %}
  {% include "../accordion-nested-example/accordion-nested-example.component.ts" %}
{% endset %}

<it-accordion-group-example></it-accordion-group-example>

<it-source-display
    html="{$ sanitize(groupHtml) $}"
    typescript="{$ sanitize(groupTs) $}" >
</it-source-display>

<it-accordion-nested-example></it-accordion-nested-example>

<it-source-display
    html="{$ sanitize(groupNestedHtml) $}"
    typescript="{$ sanitize(groupNestedTs) $}" >
</it-source-display>
