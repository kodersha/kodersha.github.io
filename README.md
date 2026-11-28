# Raison d’être — Obsidian blog

This repository is an Obsidian vault and the source of the public website.

## Write in Obsidian

1. Clone this repository.
2. Open the repository's `content/` folder as an Obsidian vault.
3. Write posts in `content/posts/` and place attachments in `content/_attachments/`.
4. Add `draft: true` to a note's YAML properties to keep it off the public site.
5. Commit and push to `main`. GitHub Actions builds and publishes the site.

The public site is generated with [Quartz 4](https://quartz.jzhao.xyz/). Obsidian remains the editor; Quartz converts the Markdown vault into a static website.

## Markdown properties

```yaml
---
title: A note
date: 2026-11-28
tags:
  - notes
draft: false
---
```

Quartz supports Obsidian wikilinks, embeds, callouts, tags, backlinks, graph view, search, and RSS.

## Publishing

Enable **Settings → Pages → Build and deployment → Source: GitHub Actions** once. Subsequent pushes to `main` deploy automatically.
