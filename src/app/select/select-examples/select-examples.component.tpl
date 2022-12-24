{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set reactiveFormHtml %}
  {% include "../select-reactive-form-example/select-reactive-form-example.component.html" %}
{% endset %}

{% set reactiveFormTypescript %}
  {% include "../select-reactive-form-example/select-reactive-form-example.component.ts" %}
{% endset %}


<it-select-reactive-form-example></it-select-reactive-form-example>

<it-source-display html="{$ sanitize(reactiveFormHtml) $}" typescript="{$ sanitize(reactiveFormTypescript) $}">
</it-source-display>






{% set templateDrivenFormHtml %}
  {% include "../select-template-driven-form-example/select-template-driven-form-example.component.html" %}
{% endset %}

{% set templateDrivenFormTypescript %}
  {% include "../select-template-driven-form-example/select-template-driven-form-example.component.ts" %}
{% endset %}


<it-select-template-driven-form-example></it-select-template-driven-form-example>

<it-source-display html="{$ sanitize(templateDrivenFormHtml) $}" typescript="{$ sanitize(templateDrivenFormTypescript) $}">
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

