{% from "../../macro.template.njk" import sanitize as sanitize %}

<h2>Esempi</h2>

{% set calloutExampleHtml %}
  {% include "../callout-example/callout-example.component.html" %}
{% endset %}

{% set calloutExampleTypescript %}
  {% include "../callout-example/callout-example.component.ts" %}
{% endset %}

<it-callout-example></it-callout-example>

<it-source-display 
    html="{$ sanitize(calloutExampleHtml) $}"
    typescript="{$ sanitize(calloutExampleTypescript) $}">
</it-source-display>

{% set calloutSuccessHtml %}
  {% include "../callout-success/callout-success.component.html" %}
{% endset %}

{% set calloutSuccessTypescript %}
  {% include "../callout-success/callout-success.component.ts" %}
{% endset %}

<it-callout-success></it-callout-success>

<it-source-display 
    html="{$ sanitize(calloutSuccessHtml) $}"
    typescript="{$ sanitize(calloutSuccessTypescript) $}">
</it-source-display>

{% set calloutWarningHtml %}
  {% include "../callout-warning/callout-warning.component.html" %}
{% endset %}

{% set calloutWarningTypescript %}
  {% include "../callout-warning/callout-warning.component.ts" %}
{% endset %}

<it-callout-warning></it-callout-warning>

<it-source-display 
    html="{$ sanitize(calloutWarningHtml) $}"
    typescript="{$ sanitize(calloutWarningTypescript) $}">
</it-source-display>

{% set calloutDangerHtml %}
  {% include "../callout-danger/callout-danger.component.html" %}
{% endset %}

{% set calloutDangerTypescript %}
  {% include "../callout-danger/callout-danger.component.ts" %}
{% endset %}

<it-callout-danger></it-callout-danger>

<it-source-display 
    html="{$ sanitize(calloutDangerHtml) $}"
    typescript="{$ sanitize(calloutDangerTypescript) $}">
</it-source-display>

{% set calloutImportantHtml %}
  {% include "../callout-important/callout-important.component.html" %}
{% endset %}

{% set calloutImportantTypescript %}
  {% include "../callout-important/callout-important.component.ts" %}
{% endset %}

<it-callout-important></it-callout-important>

<it-source-display 
    html="{$ sanitize(calloutImportantHtml) $}"
    typescript="{$ sanitize(calloutImportantTypescript) $}">
</it-source-display>

{% set calloutNoteHtml %}
  {% include "../callout-note/callout-note.component.html" %}
{% endset %}

{% set calloutNoteTypescript %}
  {% include "../callout-note/callout-note.component.ts" %}
{% endset %}

<it-callout-note></it-callout-note>

<it-source-display 
    html="{$ sanitize(calloutNoteHtml) $}"
    typescript="{$ sanitize(calloutNoteTypescript) $}">
</it-source-display>

<h2>Callout Highlights</h2>

{% set calloutHightlightsHtml %}
  {% include "../callout-hightlights/callout-hightlights.component.html" %}
{% endset %}

{% set calloutHightlightsTypescript %}
  {% include "../callout-hightlights/callout-hightlights.component.ts" %}
{% endset %}

<it-callout-hightlights></it-callout-hightlights>

<it-source-display 
    html="{$ sanitize(calloutHightlightsHtml) $}"
    typescript="{$ sanitize(calloutHightlightsTypescript) $}">
</it-source-display>

{% set calloutHightlightsSuccessHtml %}
  {% include "../hightlights-success/hightlights-success.component.html" %}
{% endset %}

{% set calloutHightlightsSuccessTypescript %}
  {% include "../hightlights-success/hightlights-success.component.ts" %}
{% endset %}

<it-hightlights-success></it-hightlights-success>

<it-source-display 
    html="{$ sanitize(calloutHightlightsSuccessHtml) $}"
    typescript="{$ sanitize(calloutHightlightsSuccessTypescript) $}">
</it-source-display>

{% set calloutHightlightsWarningHtml %}
  {% include "../hightlights-warning/hightlights-warning.component.html" %}
{% endset %}

{% set calloutHightlightsWarningTypescript %}
  {% include "../hightlights-warning/hightlights-warning.component.ts" %}
{% endset %}

<it-hightlights-warning></it-hightlights-warning>

<it-source-display 
    html="{$ sanitize(calloutHightlightsWarningHtml) $}"
    typescript="{$ sanitize(calloutHightlightsWarningTypescript) $}">
</it-source-display>

{% set calloutHightlightsDangerHtml %}
  {% include "../hightlights-danger/hightlights-danger.component.html" %}
{% endset %}

{% set calloutHightlightsDangerTypescript %}
  {% include "../hightlights-danger/hightlights-danger.component.ts" %}
{% endset %}

<it-hightlights-danger></it-hightlights-danger>

<it-source-display 
    html="{$ sanitize(calloutHightlightsDangerHtml) $}"
    typescript="{$ sanitize(calloutHightlightsDangerTypescript) $}">
</it-source-display>

{% set calloutHightlightsImportantHtml %}
  {% include "../hightlights-important/hightlights-important.component.html" %}
{% endset %}

{% set calloutHightlightsImportantTypescript %}
  {% include "../hightlights-important/hightlights-important.component.ts" %}
{% endset %}

<it-hightlights-important></it-hightlights-important>

<it-source-display 
    html="{$ sanitize(calloutHightlightsImportantHtml) $}"
    typescript="{$ sanitize(calloutHightlightsImportantTypescript) $}">
</it-source-display>

{% set calloutHightlightsNoteHtml %}
  {% include "../hightlights-note/hightlights-note.component.html" %}
{% endset %}

{% set calloutHightlightsNoteTypescript %}
  {% include "../hightlights-note/hightlights-note.component.ts" %}
{% endset %}

<it-hightlights-note></it-hightlights-note>

<it-source-display 
    html="{$ sanitize(calloutHightlightsNoteHtml) $}"
    typescript="{$ sanitize(calloutHightlightsNoteTypescript) $}">
</it-source-display>

<h2>Callout Approfondimento</h2>

{% set calloutApprofondimentoHtml %}
  {% include "../callout-approfondimento/callout-approfondimento.component.html" %}
{% endset %}

{% set calloutApprofondimentoTypescript %}
  {% include "../callout-approfondimento/callout-approfondimento.component.ts" %}
{% endset %}

<it-callout-approfondimento></it-callout-approfondimento>

<it-source-display 
    html="{$ sanitize(calloutApprofondimentoHtml) $}"
    typescript="{$ sanitize(calloutApprofondimentoTypescript) $}">
</it-source-display>