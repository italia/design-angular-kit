{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set dynamicHtml %}
  {% include "../steppers-dynamic-example/steppers-dynamic-example.component.html" %}
{% endset %}

{% set dynamicTs %}
  {% include "../steppers-dynamic-example/steppers-dynamic-example.component.ts" %}
{% endset %}

<it-steppers-dynamic-example></it-steppers-dynamic-example>

<it-source-display html="{$ sanitize(dynamicHtml) $}"  typescript="{$ sanitize(dynamicTs) $}" >
</it-source-display>

{% set headerHtml %}
  {% include "../steppers-header-example/steppers-header-example.component.html" %}
{% endset %}

{% set headerTs %}
  {% include "../steppers-header-example/steppers-header-example.component.ts" %}
{% endset %}

<it-steppers-header-example></it-steppers-header-example>

<it-source-display html="{$ sanitize(headerHtml) $}"  typescript="{$ sanitize(headerTs) $}" >
</it-source-display>

{% set mobileHtml %}
  {% include "../steppers-mobile-example/steppers-mobile-example.component.html" %}
{% endset %}

{% set mobileTs %}
  {% include "../steppers-mobile-example/steppers-mobile-example.component.ts" %}
{% endset %}

<it-steppers-mobile-example></it-steppers-mobile-example>

<it-source-display html="{$ sanitize(mobileHtml) $}"  typescript="{$ sanitize(mobileTs) $}" >
</it-source-display>
