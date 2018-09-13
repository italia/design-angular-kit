{% from "../../macro.template.njk" import sanitize as sanitize %}

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

{% set heightHtml %}
  {% include "../progress-bar-height/progress-bar-height.component.html" %}
{% endset %}

{% set heightTs %}
  {% include "../progress-bar-height/progress-bar-height.component.ts" %}
{% endset %}

<it-progress-bar-height></it-progress-bar-height>

<it-source-display html="{$ sanitize(heightHtml) $}" typescript="{$ sanitize(heightTs) $}" >
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
