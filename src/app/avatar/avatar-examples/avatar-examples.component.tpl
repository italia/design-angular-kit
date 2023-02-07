{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set html %}
  {% include "../avatar-examples/avatar-examples.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../avatar-examples/avatar-examples.component.ts" %}
{% endset %}

<it-avatar-example-colors></it-avatar-example-colors>
<it-avatar-example-size></it-avatar-example-size>
<it-avatar-example-group></it-avatar-example-group>
<it-avatar-example-dropdown></it-avatar-example-dropdown>

<it-source-display html="{$ sanitize(html) $}" typescript="{$ sanitize(typescript) $}" >
</it-source-display>