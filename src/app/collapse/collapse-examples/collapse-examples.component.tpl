{% from "../../macro.template.njk" import sanitize as sanitize %}

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

{% set groupNestedHtml %}
  {% include "../collapse-nested-example/collapse-nested-example.component.html" %}
{% endset %}

{% set groupNestedTs %}
  {% include "../collapse-nested-example/collapse-nested-example.component.ts" %}
{% endset %}

<it-collapse-example></it-collapse-example>

<it-source-display
    html="{$ sanitize(html) $}"
    typescript="{$ sanitize(typescript) $}" >
</it-source-display>

<it-collapse-group-example></it-collapse-group-example>

<it-source-display
    html="{$ sanitize(groupHtml) $}"
    typescript="{$ sanitize(groupTs) $}" >
</it-source-display>

<it-collapse-nested-example></it-collapse-nested-example>

<it-source-display
    html="{$ sanitize(groupNestedHtml) $}"
    typescript="{$ sanitize(groupNestedTs) $}" >
</it-source-display>
