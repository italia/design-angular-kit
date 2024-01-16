{% from "../../macro.template.njk" import sanitize as sanitize %}


{% set html %}
  {% include "../form-input-example/form-input-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../form-input-example/form-input-example.component.ts" %}
{% endset %}


<it-form-input-example></it-form-input-example>

<it-source-display html="{$ sanitize(html) $}" typescript="{$ sanitize(typescript) $}">
</it-source-display>



{% set formInputIconHtml %}
  {% include "../form-input-icon/form-input-icon.component.html" %}
{% endset %}

{% set formInputIconTs %}
  {% include "../form-input-icon/form-input-icon.component.ts" %}
{% endset %}


{% set formInputNumberHtml %}
  {% include "../form-input-number/form-input-number.component.html" %}
{% endset %}

{% set formInputNumberTs %}
  {% include "../form-input-number/form-input-number.component.ts" %}
{% endset %}



<it-form-input-number-example></it-form-input-number-example>

<it-source-display html="{$ sanitize(formInputNumberHtml) $}" typescript="{$ sanitize(formInputNumberTs) $}">
</it-source-display>




{% set formInputCalendarHtml %}
  {% include "../form-input-calendar/form-input-calendar.component.html" %}
{% endset %}

{% set formInputCalendarTs %}
  {% include "../form-input-calendar/form-input-calendar.component.ts" %}
{% endset %}



<it-form-input-calendar-example></it-form-input-calendar-example>

<it-source-display html="{$ sanitize(formInputCalendarHtml) $}" typescript="{$ sanitize(formInputCalendarTs) $}">
</it-source-display>






{% set tdvHtml %}
  {% include "../template-driven-validation-example/template-driven-validation-example.component.html" %}
{% endset %}

{% set tdvTs %}
  {% include "../template-driven-validation-example/template-driven-validation-example.component.ts" %}
{% endset %}

{% set mdvHtml %}
  {% include "../model-driven-validation-example/model-driven-validation-example.component.html" %}
{% endset %}

{% set mdvTs %}
  {% include "../model-driven-validation-example/model-driven-validation-example.component.ts" %}
{% endset %}







<it-form-input-icon-example></it-form-input-icon-example>

<it-source-display html="{$ sanitize(formInputIconHtml) $}" typescript="{$ sanitize(formInputIconTs) $}">
</it-source-display>




<it-template-driven-validation-example></it-template-driven-validation-example>


<it-source-display html="{$ sanitize(tdvHtml) $}" typescript="{$ sanitize(tdvTs) $}">
</it-source-display>

<it-model-driven-validation-example></it-model-driven-validation-example>

<it-source-display html="{$ sanitize(mdvHtml) $}" typescript="{$ sanitize(mdvTs) $}">
</it-source-display>


{% set htmlAutocomplete %}
  {% include "../form-autocomplete-example/form-autocomplete-example.component.html" %}
{% endset %}

{% set typescriptAutocomplete %}
  {% include "../form-autocomplete-example/form-autocomplete-example.component.ts" %}
{% endset %}

<it-form-autocomplete-example></it-form-autocomplete-example>

<it-source-display html="{$ sanitize(htmlAutocomplete) $}" typescript="{$ sanitize(typescriptAutocomplete) $}"></it-source-display>
