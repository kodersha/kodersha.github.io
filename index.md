---
layout: default
title: Заметки
---

{% assign notes = site.pages | where_exp: "p", "p.dir contains '/posts/'" | sort: "path" | reverse %}

{% for p in notes %}
<article class="post">
  {{ p.content | markdownify }}
  <div class="meta"><a href="{{ p.url | relative_url }}">{{ p.basename }}</a></div>
</article>
{% endfor %}
