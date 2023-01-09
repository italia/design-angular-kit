{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set exampleHtml %}
  {% include "../chips-example/chips-example.component.html" %}
{% endset %}

{% set exampleTs %}
  {% include "../chips-example/chips-example.component.ts" %}
{% endset %}

<it-chips-example></it-chips-example>

<it-source-display html="{$ sanitize(exampleHtml) $}"  typescript="{$ sanitize(exampleTs) $}" >
</it-source-display>

{% set colorsHtml %}
  {% include "../chips-colors/chips-colors.component.html" %}
{% endset %}

{% set colorsTs %}
  {% include "../chips-colors/chips-colors.component.ts" %}
{% endset %}

<it-chips-colors></it-chips-colors>

<it-source-display html="{$ sanitize(colorsHtml) $}"  typescript="{$ sanitize(colorsTs) $}" >
</it-source-display>

{% set disabledHtml %}
  {% include "../chips-disabled/chips-disabled.component.html" %}
{% endset %}

{% set disabledTs %}
  {% include "../chips-disabled/chips-disabled.component.ts" %}
{% endset %}

<it-chips-disabled></it-chips-disabled>

<it-source-display html="{$ sanitize(disabledHtml) $}"  typescript="{$ sanitize(disabledTs) $}" >
</it-source-display>

{% set groupHtml %}
  {% include "../chips-group/chips-group.component.html" %}
{% endset %}

{% set groupTs %}
  {% include "../chips-group/chips-group.component.ts" %}
{% endset %}

<it-chips-group></it-chips-group>

<it-source-display html="{$ sanitize(groupHtml) $}"  typescript="{$ sanitize(groupTs) $}" >
</it-source-display>