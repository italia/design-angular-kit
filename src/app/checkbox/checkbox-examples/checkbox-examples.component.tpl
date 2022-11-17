{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set html %}
  {% include "../checkbox-example/checkbox-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../checkbox-example/checkbox-example.component.ts" %}
{% endset %}

<it-checkbox-example></it-checkbox-example>

<it-source-display html="{$ sanitize(html) $}" typescript="{$ sanitize(typescript) $}" >
</it-source-display>



{% set inlineHtml %}
  {% include "../checkbox-example-inline/checkbox-example-inline.component.html" %}
{% endset %}

{% set inlineTypescript %}
  {% include "../checkbox-example-inline/checkbox-example-inline.component.ts" %}
{% endset %}

<it-checkbox-example-inline></it-checkbox-example-inline>

<it-source-display html="{$ sanitize(inlineHtml) $}" typescript="{$ sanitize(inlineTypescript) $}" >
</it-source-display>




{% set groupHtml %}
  {% include "../checkbox-example-group/checkbox-example-group.component.html" %}
{% endset %}

{% set groupTypescript %}
  {% include "../checkbox-example-group/checkbox-example-group.component.ts" %}
{% endset %}

<it-checkbox-example-group></it-checkbox-example-group>

<it-source-display html="{$ sanitize(groupHtml) $}" typescript="{$ sanitize(groupTypescript) $}" >
</it-source-display>
