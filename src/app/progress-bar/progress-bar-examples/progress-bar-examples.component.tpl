{% set html %}
  {% include "../progress-bar-example/progress-bar-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../progress-bar-example/progress-bar-example.component.ts" %}
{% endset %}

<it-progress-bar-example></it-progress-bar-example>

<it-source-display html="{$ html | escape $}" typescript="{$ typescript | escape $}" >
</it-source-display>

{% set labelHtml %}
  {% include "../progress-bar-label/progress-bar-label.component.html" %}
{% endset %}

{% set labelTs %}
  {% include "../progress-bar-label/progress-bar-label.component.ts" %}
{% endset %}

<it-progress-bar-label></it-progress-bar-label>

<it-source-display html="{$ labelHtml | escape $}" typescript="{$ labelTs | escape $}" >
</it-source-display>

{% set heightHtml %}
  {% include "../progress-bar-height/progress-bar-height.component.html" %}
{% endset %}

{% set heightTs %}
  {% include "../progress-bar-height/progress-bar-height.component.ts" %}
{% endset %}

<it-progress-bar-height></it-progress-bar-height>

<it-source-display html="{$ heightHtml | escape $}" typescript="{$ heightTs | escape $}" >
</it-source-display>

{% set bgHtml %}
  {% include "../progress-bar-bg/progress-bar-bg.component.html" %}
{% endset %}

{% set bgTs %}
  {% include "../progress-bar-bg/progress-bar-bg.component.ts" %}
{% endset %}

<it-progress-bar-bg></it-progress-bar-bg>

<it-source-display html="{$ bgHtml | escape $}" typescript="{$ bgTs | escape $}" >
</it-source-display>
