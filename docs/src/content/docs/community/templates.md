---
title: Templates
---

:::caution

This page might be outdated for Wails v3.

:::

<!-- TODO: Update this link -->

This page serves as a list for community supported templates. To build your own
template, please see the [Templates](https://wails.io/docs/guides/templates)
guide.

:::tip[How to Submit a Template]

You can click `Edit this page` at the bottom to include your templates.

:::

To use these templates, run
`wails init -n "Your Project Name" -t [the link below[@version]]`

If there is no version suffix, the main branch code template is used by default.
If there is a version suffix, the code template corresponding to the tag of this
version is used.

Example:
`wails init -n "Your Project Name" -t https://github.com/misitebao/wails-template-vue`

:::danger[Attention]

**The Wails project does not maintain, is not responsible nor liable for 3rd
party templates!**

If you are unsure about a template, inspect `package.json` and `wails.json` for
what scripts are run and what packages are installed.

:::

## Vue

- [wails-template-vue](https://github.com/misitebao/wails-template-vue) - Wails
  template based on Vue ecology (Integrated TypeScript, Dark theme,
  Internationalization, Single page routing, TailwindCSS)
- [wails-template-quasar-js](https://github.com/sgosiaco/wails-template-quasar-js) -
  A template using JavaScript + Quasar V2 (Vue 3, Vite, Sass, Pinia, ESLint,
  Prettier)
- [wails-template-quasar-ts](https://github.com/sgosiaco/wails-template-quasar-ts) -
  A template using TypeScript + Quasar V2 (Vue 3, Vite, Sass, Pinia, ESLint,
  Prettier, Composition API with &lt;script setup&gt;)
- [wails-template-naive](https://github.com/tk103331/wails-template-naive) -
  Wails template based on Naive UI (A Vue 3 Component Library)
- [wails-template-nuxt](https://github.com/gornius/wails-template-nuxt) - Wails
  template using clean Nuxt3 and TypeScript with auto-imports for wails js
  runtime
- [Wails-Tool-Template](https://github.com/xisuo67/Wails-Tool-Template) - Wails
  template using Vue+TypeScript+Vite+Element-plus(仿网易云)

## Angular

- [wails-template-angular](https://github.com/mateothegreat/wails-template-angular) -
  Angular 15+ action packed & ready to roll to production.
- [wails-angular-template](https://github.com/TAINCER/wails-angular-template) -
  Angular with TypeScript, Sass, Hot-Reload, Code-Splitting and i18n

## React

- [wails-react-template](https://github.com/AlienRecall/wails-react-template) -
  A template using reactjs
- [wails-react-template](https://github.com/flin7/wails-react-template) - A
  minimal template for React that supports live development
- [wails-template-nextjs](https://github.com/LGiki/wails-template-nextjs) - A
  template using Next.js and TypeScript
- [wails-template-nextjs-app-router](https://github.com/thisisvk-in/wails-template-nextjs-app-router) -
  A template using Next.js and TypeScript with App router
- [wails-template-nextjs-app-router-src](https://github.com/edai-git/wails-template-nextjs-app-router) -
  A template using Next.js and TypeScript with App router src + example
- [wails-vite-react-ts-tailwind-template](https://github.com/hotafrika/wails-vite-react-ts-tailwind-template) -
  A template for React + TypeScript + Vite + TailwindCSS
- [wails-vite-react-ts-tailwind-shadcnui-template](https://github.com/Mahcks/wails-vite-react-tailwind-shadcnui-ts) -
  A template with Vite, React, TypeScript, TailwindCSS, and shadcn/ui

## Svelte

- [wails-svelte-template](https://github.com/raitonoberu/wails-svelte-template) -
  A template using Svelte
- [wails-vite-svelte-template](https://github.com/BillBuilt/wails-vite-svelte-template) -
  A template using Svelte and Vite
- [wails-vite-svelte-tailwind-template](https://github.com/BillBuilt/wails-vite-svelte-tailwind-template) -
  A template using Svelte and Vite with TailwindCSS v3
- [wails-svelte-tailwind-vite-template](https://github.com/PylotLight/wails-vite-svelte-tailwind-template/tree/master) -
  An updated template using Svelte v4.2.0 and Vite with TailwindCSS v3.3.3
- [wails-sveltekit-template](https://github.com/h8gi/wails-sveltekit-template) -
  A template using SvelteKit
- [wails-template-shadcn-svelte](https://github.com/xijaja/wails-template-shadcn-svelte) -
  A template using Sveltekit and Shadcn-Svelte

## Solid

- [wails-template-vite-solid-ts](https://github.com/xijaja/wails-template-solid-ts) -
  A template using Solid + Ts + Vite
- [wails-template-vite-solid-js](https://github.com/xijaja/wails-template-solid-js) -
  A template using Solid + Js + Vite

## Elm

- [wails-elm-template](https://github.com/benjamin-thomas/wails-elm-template) -
  Develop your GUI app with functional programming and a **snappy** hot-reload
  setup :tada: :rocket:
- [wails-template-elm-tailwind](https://github.com/rnice01/wails-template-elm-tailwind) -
  Combine the powers :muscle: of Elm + Tailwind CSS + Wails! Hot reloading
  supported.

## HTMX

- [wails-htmx-templ-chi-tailwind](https://github.com/PylotLight/wails-hmtx-templ-template) -
  Use a unique combination of pure htmx for interactivity plus templ for
  creating components and forms

## Pure JavaScript (Vanilla)

- [wails-pure-js-template](https://github.com/KiddoV/wails-pure-js-template) - A
  template with nothing but just basic JavaScript, HTML, and CSS

## Lit (web components)

- [wails-lit-shoelace-esbuild-template](https://github.com/Braincompiler/wails-lit-shoelace-esbuild-template) -
  Wails template providing frontend with lit, Shoelace component library +
  pre-configured prettier and typescript.
