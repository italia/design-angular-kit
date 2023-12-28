{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set htmlExample %}
  {% include "../list-example/list-example.component.html" %}
{% endset %}

{% set typescriptExample %}
  {% include "../list-example/list-example.component.ts" %}
{% endset %}

<it-list-example></it-list-example>

<it-source-display html="{$ sanitize(htmlExample) $}" typescript="{$ sanitize(typescriptExample) $}" >
</it-source-display>


{% set htmlAvatar %}
  {% include "../list-avatar/list-avatar.component.html" %}
{% endset %}

{% set typescriptAvatar %}
  {% include "../list-avatar/list-avatar.component.ts" %}
{% endset %}

<it-list-avatar></it-list-avatar>

<it-source-display html="{$ sanitize(htmlAvatar) $}" typescript="{$ sanitize(typescriptAvatar) $}" >
</it-source-display>


{% set htmlImage %}
  {% include "../list-image/list-image.component.html" %}
{% endset %}

{% set typescriptImage %}
  {% include "../list-image/list-image.component.ts" %}
{% endset %}

<it-list-image></it-list-image>

<it-source-display html="{$ sanitize(htmlImage) $}" typescript="{$ sanitize(typescriptImage) $}" >
</it-source-display>

{% set htmlarrow %}
  {% include "../list-arrow/list-arrow.component.html" %}
{% endset %}

{% set typescriptarrow %}
  {% include "../list-arrow/list-arrow.component.ts" %}
{% endset %}

<it-list-arrow></it-list-arrow>

<it-source-display html="{$ sanitize(htmlarrow) $}" typescript="{$ sanitize(typescriptarrow) $}" >
</it-source-display>

{% set htmlmultiple %}
  {% include "../list-multiple/list-multiple.component.html" %}
{% endset %}

{% set typescriptmultiple %}
  {% include "../list-multiple/list-multiple.component.ts" %}
{% endset %}

<it-list-multiple></it-list-multiple>

<it-source-display html="{$ sanitize(htmlmultiple) $}" typescript="{$ sanitize(typescriptmultiple) $}" >
</it-source-display>


<h2>Liste per menù di navigazione</h2>

{% set htmlLink %}
  {% include "../list-link/list-link.component.html" %}
{% endset %}

{% set typescriptLink %}
  {% include "../list-link/list-link.component.ts" %}
{% endset %}

<it-list-link></it-list-link>

<it-source-display html="{$ sanitize(htmlLink) $}" typescript="{$ sanitize(typescriptLink) $}" >
</it-source-display>

{% set htmlLinkIcons %}
  {% include "../list-link-icons/list-link-icons.component.html" %}
{% endset %}

{% set typescriptLinkIcons %}
  {% include "../list-link-icons/list-link-icons.component.ts" %}
{% endset %}

<it-list-link-icons></it-list-link-icons>

<it-source-display html="{$ sanitize(htmlLinkIcons) $}" typescript="{$ sanitize(typescriptLinkIcons) $}" >
</it-source-display>


{% set htmltogglecheckbox %}
  {% include "../list-toggle-checkbox/list-toggle-checkbox.component.html" %}
{% endset %}

{% set typescripttogglecheckbox %}
  {% include "../list-toggle-checkbox/list-toggle-checkbox.component.ts" %}
{% endset %}

<it-list-toggle-checkbox></it-list-toggle-checkbox>

<it-source-display html="{$ sanitize(htmltogglecheckbox) $}" typescript="{$ sanitize(typescripttogglecheckbox) $}" >
</it-source-display>

{% set htmlcollassible %}
  {% include "../list-collassible/list-collassible.component.html" %}
{% endset %}

{% set typescriptcollassible %}
  {% include "../list-collassible/list-collassible.component.ts" %}
{% endset %}

<it-list-collassible></it-list-collassible>

<it-source-display html="{$ sanitize(htmlcollassible) $}" typescript="{$ sanitize(typescriptcollassible) $}" >
</it-source-display>