---
layout: default
title: Заметки
---

{% assign notes = site.pages | where_exp: "p", "p.dir contains '/posts/'" | sort: "path" | reverse %}

{% for p in notes %}
<article>
  {{ p.content | markdownify }}
  <p><small><a href="{{ p.url | relative_url }}">{{ p.title | default: p.basename }}</a></small></p>
</article>
<hr>
{% endfor %}
