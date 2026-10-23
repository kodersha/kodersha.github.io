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
