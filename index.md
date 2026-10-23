---
layout: default
title: Заметки
---

<ul>
{% for p in site.pages %}
  {% if p.dir contains '/posts/' and p.extname == '.md' %}
  <li><a href="{{ p.url | relative_url }}">{{ p.title | default: p.basename }}</a></li>
  {% endif %}
{% endfor %}
</ul>


<h3>Отладка</h3>
<ul>
{% for p in site.pages %}
  <li>path: {{ p.path }} | dir: {{ p.dir }} | url: {{ p.url }}</li>
{% endfor %}
</ul>
