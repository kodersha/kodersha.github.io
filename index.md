---
layout: default
title: Заметки
---

# Заметки

<ul>
{% for p in site.pages %}
  {% if p.path contains 'posts/' and p.extname == '.md' %}
  <li><a href="{{ p.url | relative_url }}">{{ p.title | default: p.name }}</a></li>
  {% endif %}
{% endfor %}
</ul>
