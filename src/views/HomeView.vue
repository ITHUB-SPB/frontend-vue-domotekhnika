<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import NewsCard from '../components/NewsCard.vue'
import type { NewsOverview, NewsOverviewResponse } from '@/types';

const newsData = ref<NewsOverview[]>([])
const currentPage = ref(1)
const newsError = ref<null | string>(null)
const hasMoreNews = ref(true)

const getData = async () => {
  try {
    const url = `http://localhost:9182/news?_page=${currentPage.value}&_per_page=6`
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Network issues')
    }
    const { data } = await response.json() satisfies NewsOverviewResponse
    if (data.length < 6) {
      hasMoreNews.value = false
    }
    newsData.value = [...newsData.value, ...data]
  } catch (error: unknown) {
    newsError.value = (error as Error)?.message ?? ""
  }
}

watch(currentPage, getData)
onMounted(getData)

</script>

<template>
  <main>
    <button @click="currentPage++" v-if="hasMoreNews">Показать ещё</button>
    <section v-for="item in newsData">
      <NewsCard
        :slug="item.slug" 
        :datePublish="item.datePublish" 
        :title="item.title" 
        :shortText="item.shortText"
        :image="item.image"
      />
    </section>
  </main>
</template>