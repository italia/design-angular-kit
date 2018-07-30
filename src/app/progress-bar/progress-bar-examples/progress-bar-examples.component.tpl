{% set html %}
  {% include "../progress-bar-example/progress-bar-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../progress-bar-example/progress-bar-example.component.ts" %}
{% endset %}

<it-progress-bar-example></it-progress-bar-example>

<it-source-display html="{$ html | replace("\{\{", "/\{/\{") | replace("\}\}", "/\}/\}") $}" typescript="{$ typescript | replace("\{\{", "/\{/\{") | replace("\}\}", "/\}/\}") $}" >
</it-source-display>

{% set labelHtml %}
  {% include "../progress-bar-label/progress-bar-label.component.html" %}
{% endset %}

{% set labelTs %}
  {% include "../progress-bar-label/progress-bar-label.component.ts" %}
{% endset %}

<it-progress-bar-label></it-progress-bar-label>

<it-source-display html="{$ labelHtml | replace("\{\{", "/\{/\{") | replace("\}\}", "/\}/\}") $}" typescript="{$ labelTs | replace("\{\{", "/\{/\{") | replace("\}\}", "/\}/\}") $}" >
</it-source-display>

{% set heightHtml %}
  {% include "../progress-bar-height/progress-bar-height.component.html" %}
{% endset %}

{% set heightTs %}
  {% include "../progress-bar-height/progress-bar-height.component.ts" %}
{% endset %}

<it-progress-bar-height></it-progress-bar-height>

<it-source-display html="{$ heightHtml | replace("\{\{", "/\{/\{") | replace("\}\}", "/\}/\}") $}" typescript="{$ heightTs | replace("\{\{", "/\{/\{") | replace("\}\}", "/\}/\}") $}" >
</it-source-display>

{% set bgHtml %}
  {% include "../progress-bar-bg/progress-bar-bg.component.html" %}
{% endset %}

{% set bgTs %}
  {% include "../progress-bar-bg/progress-bar-bg.component.ts" %}
{% endset %}

<it-progress-bar-bg></it-progress-bar-bg>

<it-source-display html="{$ bgHtml | replace("\{\{", "/\{/\{") | replace("\}\}", "/\}/\}") $}" typescript="{$ bgTs | replace("\{\{", "/\{/\{") | replace("\}\}", "/\}/\}") $}" >
</it-source-display>
