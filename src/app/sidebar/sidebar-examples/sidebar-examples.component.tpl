{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set simpleHtml %}
  {% include "../sidebar-example/sidebar-example.component.html" %}
{% endset %}

{% set simpleTs %}
  {% include "../sidebar-example/sidebar-example.component.ts" %}
{% endset %}

<it-sidebar-example></it-sidebar-example>

<it-source-display html="{$ sanitize(simpleHtml) $}" typescript="{$ sanitize(simpleTs) $}"></it-source-display>

{% set iconHtml %}
  {% include "../sidebar-icon-example/sidebar-icon-example.component.html" %}
{% endset %}

{% set iconTs %}
  {% include "../sidebar-icon-example/sidebar-icon-example.component.ts" %}
{% endset %}

<it-sidebar-icon-example></it-sidebar-icon-example>

<it-source-display html="{$ sanitize(iconHtml) $}" typescript="{$ sanitize(iconTs) $}"></it-source-display>

{% set rightLineHtml %}
  {% include "../sidebar-right-line-example/sidebar-right-line-example.component.html" %}
{% endset %}

{% set rightLineTs %}
  {% include "../sidebar-right-line-example/sidebar-right-line-example.component.ts" %}
{% endset %}

<it-sidebar-right-line-example></it-sidebar-right-line-example>

<it-source-display html="{$ sanitize(rightLineHtml) $}" typescript="{$ sanitize(rightLineTs) $}"></it-source-display>

{% set leftLineHtml %}
  {% include "../sidebar-left-line-example/sidebar-left-line-example.component.html" %}
{% endset %}

{% set leftLineTs %}
  {% include "../sidebar-left-line-example/sidebar-left-line-example.component.ts" %}
{% endset %}

<it-sidebar-left-line-example></it-sidebar-left-line-example>

<it-source-display html="{$ sanitize(leftLineHtml) $}" typescript="{$ sanitize(leftLineTs) $}"></it-source-display>

{% set nestedHtml %}
  {% include "../sidebar-nested-example/sidebar-nested-example.component.html" %}
{% endset %}

{% set nestedTs %}
  {% include "../sidebar-nested-example/sidebar-nested-example.component.ts" %}
{% endset %}

<it-sidebar-nested-example></it-sidebar-nested-example>

<it-source-display html="{$ sanitize(nestedHtml) $}" typescript="{$ sanitize(nestedTs) $}"></it-source-display>

{% set darkHtml %}
  {% include "../sidebar-dark-example/sidebar-dark-example.component.html" %}
{% endset %}

{% set darkTs %}
  {% include "../sidebar-dark-example/sidebar-dark-example.component.ts" %}
{% endset %}

<it-sidebar-dark-example></it-sidebar-dark-example>

<it-source-display html="{$ sanitize(darkHtml) $}" typescript="{$ sanitize(darkTs) $}"></it-source-display>
