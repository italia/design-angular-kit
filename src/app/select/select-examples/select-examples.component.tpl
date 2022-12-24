{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set html %}
  {% include "../select-example/select-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../select-example/select-example.component.ts" %}
{% endset %}


<it-select-example></it-select-example>

<it-source-display html="{$ sanitize(html) $}" typescript="{$ sanitize(typescript) $}">
</it-source-display>





{% set disabledHtml %}
  {% include "../select-disabled-example/select-disabled-example.component.html" %}
{% endset %}

{% set disabledTypescript %}
  {% include "../select-disabled-example/select-disabled-example.component.ts" %}
{% endset %}


<it-select-disabled-example></it-select-disabled-example>

<it-source-display html="{$ sanitize(disabledHtml) $}" typescript="{$ sanitize(disabledTypescript) $}">
</it-source-display>





{% set groupHtml %}
  {% include "../select-group-example/select-group-example.component.html" %}
{% endset %}

{% set groupTypescript %}
  {% include "../select-group-example/select-group-example.component.ts" %}
{% endset %}


<it-select-group-example></it-select-group-example>

<it-source-display html="{$ sanitize(groupHtml) $}" typescript="{$ sanitize(groupTypescript) $}">
</it-source-display>




{% set sizeHtml %}
  {% include "../select-size-example/select-size-example.component.html" %}
{% endset %}

{% set sizeTypescript %}
  {% include "../select-size-example/select-size-example.component.ts" %}
{% endset %}


<it-select-size-example></it-select-size-example>

<it-source-display html="{$ sanitize(sizeHtml) $}" typescript="{$ sanitize(sizeTypescript) $}">
</it-source-display>

