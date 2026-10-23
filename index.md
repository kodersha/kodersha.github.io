---
layout: default
title: Заметки
---

<ul>
{% for p in site.pages %}
  {% if p.dir == '/posts/' %}
  <li><a href="{{ p.url | relative_url }}">{{ p.title | default: p.basename | default: p.name }}</a></li>
  {% endif %}
{% endfor %}
</ul>
