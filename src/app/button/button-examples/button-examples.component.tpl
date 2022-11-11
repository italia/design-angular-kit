{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set interactiveHtml %}
  {% include "../button-example-interactive/button-example-interactive.component.html" %}
{% endset %}

{% set interactiveTs %}
  {% include "../button-example-interactive/button-example-interactive.component.ts" %}
{% endset %}

<it-button-example-interactive></it-button-example-interactive>

<it-source-display html="{$ sanitize(interactiveHtml) $}"  typescript="{$ sanitize(interactiveTs) $}" >
</it-source-display>



{% set iconButtonHtml %}
  {% include "../button-example-icon/button-example-icon.component.html" %}
{% endset %}

{% set iconTs %}
  {% include "../button-example-icon/button-example-icon.component.ts" %}
{% endset %}

<it-button-example-icon></it-button-example-icon>

<it-source-display html="{$ sanitize(iconButtonHtml) $}"  typescript="{$ sanitize(iconTs) $}" >
</it-source-display>




{% set html %}
  {% include "../button-example/button-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../button-example/button-example.component.ts" %}
{% endset %}

<it-button-example></it-button-example>

<it-source-display html="{$ sanitize(html) $}" typescript="{$ sanitize(typescript) $}" >
</it-source-display>

{% set colorHtml %}
  {% include "../button-example-color/button-example-color.component.html" %}
{% endset %}

{% set colorTs %}
  {% include "../button-example-color/button-example-color.component.ts" %}
{% endset %}

<it-button-example-color></it-button-example-color>

<it-source-display html="{$ sanitize(colorHtml) $}" typescript="{$ sanitize(colorTs) $}" >
</it-source-display>




{% set colorDarkHtml %}
  {% include "../button-example-color-dark/button-example-color-dark.component.html" %}
{% endset %}

{% set colorDarkTs %}
  {% include "../button-example-color-dark/button-example-color-dark.component.ts" %}
{% endset %}

<it-button-example-color-dark></it-button-example-color-dark>

<it-source-display html="{$ sanitize(colorDarkHtml) $}" typescript="{$ sanitize(colorDarkTs) $}" >
</it-source-display>





{% set sizeHtml %}
  {% include "../button-example-size/button-example-size.component.html" %}
{% endset %}

{% set sizeTs %}
  {% include "../button-example-size/button-example-size.component.ts" %}
{% endset %}

<it-button-example-size></it-button-example-size>

<it-source-display html="{$ sanitize(sizeHtml) $}" typescript="{$ sanitize(sizeTs) $}" >
</it-source-display>
