<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import NewsCard from '../components/NewsCard.vue'
import type { NewsOverview, NewsOverviewResponse } from '@/types';

const router = useRouter()
const newsData = ref<NewsOverview | null>(null)
const newsError = ref<null | string>(null)
const slug = router.currentRoute.value.params.slug

const getData = async () => {
  try {
    const url = `http://localhost:9182/news?slug=${slug}`
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Network issues')
    }
    const data = await response.json()
    newsData.value = data[0]
  } catch (error: unknown) {
    newsError.value = (error as Error)?.message ?? ""
  }
}

onMounted(getData)

</script>

<template>
  <main v-if="newsData">
    <h2>{{ newsData.title }}</h2>
    <NewsCard
      :slug="newsData.slug" 
      :datePublish="newsData.datePublish" 
      title="" 
      :shortText="newsData.shortText"
      :image="newsData.image"
    />
  </main>
</template>