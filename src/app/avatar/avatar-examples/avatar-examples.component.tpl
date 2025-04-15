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

{% set extraTextHtml %}
  {% include "../avatar-example-extra-text/avatar-example-extra-text.component.html" %}
{% endset %}

{% set extraTextTypescript %}
  {% include "../avatar-example-extra-text/avatar-example-extra-text.component.ts" %}
{% endset %}


<it-avatar-example-extra-text></it-avatar-example-extra-text>

<it-source-display html="{$ sanitize(extraTextHtml) $}" typescript="{$ sanitize(extraTextTypescript) $}" >
</it-source-display>




{% set presenceHtml %}
  {% include "../avatar-example-presence/avatar-example-presence.component.html" %}
{% endset %}

{% set presenceTypescript %}
  {% include "../avatar-example-presence/avatar-example-presence.component.ts" %}
{% endset %}


<it-avatar-example-presence></it-avatar-example-presence>

<it-source-display html="{$ sanitize(presenceHtml) $}" typescript="{$ sanitize(presenceTypescript) $}" >
</it-source-display>


{% set statusHtml %}
  {% include "../avatar-example-status/avatar-example-status.component.html" %}
{% endset %}

{% set statusTypescript %}
  {% include "../avatar-example-status/avatar-example-status.component.ts" %}
{% endset %}


<it-avatar-example-status></it-avatar-example-status>

<it-source-display html="{$ sanitize(statusHtml) $}" typescript="{$ sanitize(statusTypescript) $}" >
</it-source-display>
