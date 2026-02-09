# Vue КТ #1

## Задание

Используя фреймворк Vue.js необходимо создать двухстраничное приложение на основе [задания](https://www.notion.so/radislaw/9c4c4b1823304404af78a0f7cbe640f3) с тем отличием, что данные необходимо запрашивать с локального json-сервера.

Работу вести в ветках репозитория, в качестве названия ветки указать свою фамилию

## Критерии

**Стартовая страница (HomeView.vue)**

- (2 балла) за соответствие верстки карточки новости (на главной странице),
- (2 балла) за верстку сетки новостей (на главной странице, флексом либо гридом).

**Страница деталей (DetailView.vue)**

- (2 балла) за верстку и реализацию страницы деталей,
- (1 балл) за отрисовку полного текста новостей (через директиву v-html).

__Дополнительные задания *__

- (2 балла) за реализацию прокрутки к новым загруженным новостям (через установку ref на элементе и методы `window.scrollTo`, `<element>.scrollIntoView` либо свойство `<element>.scrollTop`),
- (1 балл) за загрузку в ветку репозитория.

## Рекомендации

- [VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar).
- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)
