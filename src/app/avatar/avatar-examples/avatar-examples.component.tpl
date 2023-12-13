{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set html %}
  {% include "../avatar-example-colors/avatar-example-colors.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../avatar-example-colors/avatar-example-colors.component.ts" %}
{% endset %}

<it-avatar-example-colors></it-avatar-example-colors>

<it-source-display html="{$ sanitize(html) $}" typescript="{$ sanitize(typescript) $}" >
</it-source-display>



{% set sizeHtml %}
  {% include "../avatar-example-size/avatar-example-size.component.html" %}
{% endset %}

{% set sizeTypescript %}
  {% include "../avatar-example-size/avatar-example-size.component.ts" %}
{% endset %}

<it-avatar-example-size></it-avatar-example-size>

<it-source-display html="{$ sanitize(sizeHtml) $}" typescript="{$ sanitize(sizeTypescript) $}" >
</it-source-display>



{% set groupHtml %}
  {% include "../avatar-example-group/avatar-example-group.component.html" %}
{% endset %}

{% set groupTypescript %}
  {% include "../avatar-example-group/avatar-example-group.component.ts" %}
{% endset %}

<it-avatar-example-group></it-avatar-example-group>

<it-source-display html="{$ sanitize(groupHtml) $}" typescript="{$ sanitize(groupTypescript) $}" >
</it-source-display>




{% set dropdownHtml %}
  {% include "../avatar-example-dropdown/avatar-example-dropdown.component.html" %}
{% endset %}

{% set dropdownTypescript %}
  {% include "../avatar-example-dropdown/avatar-example-dropdown.component.ts" %}
{% endset %}


<it-avatar-example-dropdown></it-avatar-example-dropdown>

<it-source-display html="{$ sanitize(dropdownHtml) $}" typescript="{$ sanitize(dropdownTypescript) $}" >
</it-source-display>
