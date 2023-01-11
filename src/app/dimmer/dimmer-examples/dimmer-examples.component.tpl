{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set dimmerExampleHtml %}
  {% include "../dimmer-example/dimmer-example.component.html" %}
{% endset %}

{% set dimmerExampleTypescript %}
  {% include "../dimmer-example/dimmer-example.component.ts" %}
{% endset %}

<it-dimmer-example></it-dimmer-example>

<it-source-display 
    html="{$ sanitize(dimmerExampleHtml) $}"
    typescript="{$ sanitize(dimmerExampleTypescript) $}">
</it-source-display>

{% set dimmerPrimaryHtml %}
  {% include "../dimmer-primary/dimmer-primary.component.html" %}
{% endset %}

{% set dimmerPrimaryTypescript %}
  {% include "../dimmer-primary/dimmer-primary.component.ts" %}
{% endset %}

<it-dimmer-primary></it-dimmer-primary>

<it-source-display 
    html="{$ sanitize(dimmerPrimaryHtml) $}"
    typescript="{$ sanitize(dimmerPrimaryTypescript) $}">
</it-source-display>

{% set dimmerButtonsHtml %}
  {% include "../dimmer-with-buttons/dimmer-with-buttons.component.html" %}
{% endset %}

{% set dimmerButtonsTypescript %}
  {% include "../dimmer-with-buttons/dimmer-with-buttons.component.ts" %}
{% endset %}

<it-dimmer-with-buttons></it-dimmer-with-buttons>

<it-source-display 
    html="{$ sanitize(dimmerButtonsHtml) $}"
    typescript="{$ sanitize(dimmerButtonsTypescript) $}">
</it-source-display>

{% set dimmerPrimaryButtonHtml %}
  {% include "../dimmer-primary-one-button/dimmer-primary-one-button.component.html" %}
{% endset %}

{% set dimmerPrimaryButtonTypescript %}
  {% include "../dimmer-primary-one-button/dimmer-primary-one-button.component.ts" %}
{% endset %}

<it-dimmer-primary-one-button></it-dimmer-primary-one-button>

<it-source-display 
    html="{$ sanitize(dimmerPrimaryButtonHtml) $}"
    typescript="{$ sanitize(dimmerPrimaryButtonTypescript) $}">
</it-source-display>
