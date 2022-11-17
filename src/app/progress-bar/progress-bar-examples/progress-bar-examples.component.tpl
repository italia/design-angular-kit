{% from "../../macro.template.njk" import sanitize as sanitize %}


{% set indeterminateHtml %}
  {% include "../progress-bar-indeterminate/progress-bar-indeterminate.component.html" %}
{% endset %}

{% set indeterminateTs %}
  {% include "../progress-bar-indeterminate/progress-bar-indeterminate.component.ts" %}
{% endset %}

<it-progress-bar-indeterminate></it-progress-bar-indeterminate>

<it-source-display html="{$ sanitize(indeterminateHtml) $}" typescript="{$ sanitize(indeterminateTs) $}" >
</it-source-display>




{% set progressButtonHtml %}
  {% include "../progress-bar-button/progress-bar-button.component.html" %}
{% endset %}

{% set progressButtonTs %}
  {% include "../progress-bar-button/progress-bar-button.component.ts" %}
{% endset %}

<it-progress-bar-button></it-progress-bar-button>

<it-source-display html="{$ sanitize(progressButtonHtml) $}" typescript="{$ sanitize(progressButtonTs) $}" >
</it-source-display>





{% set html %}
  {% include "../progress-bar-example/progress-bar-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../progress-bar-example/progress-bar-example.component.ts" %}
{% endset %}

<it-progress-bar-example></it-progress-bar-example>

<it-source-display html="{$ sanitize(html) $}" typescript="{$ sanitize(typescript) $}" >
</it-source-display>

{% set labelHtml %}
  {% include "../progress-bar-label/progress-bar-label.component.html" %}
{% endset %}

{% set labelTs %}
  {% include "../progress-bar-label/progress-bar-label.component.ts" %}
{% endset %}

<it-progress-bar-label></it-progress-bar-label>

<it-source-display html="{$ sanitize(labelHtml) $}" typescript="{$ sanitize(labelTs) $}" >
</it-source-display>



{% set bgHtml %}
  {% include "../progress-bar-bg/progress-bar-bg.component.html" %}
{% endset %}

{% set bgTs %}
  {% include "../progress-bar-bg/progress-bar-bg.component.ts" %}
{% endset %}

<it-progress-bar-bg></it-progress-bar-bg>

<it-source-display html="{$ sanitize(bgHtml) $}" typescript="{$ sanitize(bgTs) $}" >
</it-source-display>
