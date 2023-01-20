{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set fileListHtml %}
  {% include "../upload-file-list-example/upload-file-list-example.component.html" %}
{% endset %}

{% set fileListTs %}
  {% include "../upload-file-list-example/upload-file-list-example.component.ts" %}
{% endset %}

<it-upload-file-list-example></it-upload-file-list-example>

<it-source-display html="{$ sanitize(fileListHtml) $}"  typescript="{$ sanitize(fileListTs) $}" >
</it-source-display>

{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set imageListHtml %}
  {% include "../upload-image-list-example/upload-image-list-example.component.html" %}
{% endset %}

{% set imageListTs %}
  {% include "../upload-image-list-example/upload-image-list-example.component.ts" %}
{% endset %}

<it-upload-image-list-example></it-upload-image-list-example>

<it-source-display html="{$ sanitize(imageListHtml) $}"  typescript="{$ sanitize(imageListTs) $}" >
</it-source-display>

{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set dragDropHtml %}
  {% include "../upload-drag-drop-example/upload-drag-drop-example.component.html" %}
{% endset %}

{% set dragDropTs %}
  {% include "../upload-drag-drop-example/upload-drag-drop-example.component.ts" %}
{% endset %}

<it-upload-drag-drop-example></it-upload-drag-drop-example>

<it-source-display html="{$ sanitize(dragDropHtml) $}"  typescript="{$ sanitize(dragDropTs) $}" >
</it-source-display>
