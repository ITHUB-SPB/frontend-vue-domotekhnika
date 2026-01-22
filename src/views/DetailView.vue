<script setup lang="ts">
import { ref, onMounted } from 'vue'
import NewsCard from '../components/NewsCard.vue'

const newsData = ref(null)
const pageCount = ref(null)
const currentPage = ref(1)
const newsError = ref(null)

const getData = async () => {
  try {
    const url = `https://domotekhnika.ru/api/v1/news?page=${currentPage.value}`
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Network issues')
    }
    const { data } = await response.json()
    console.log(data)
    newsData.value = data.news
    pageCount.value = data.pageCount
  } catch (error: unknown) {
    newsError.value = (error as Error)?.message ?? ""
  }
}

</script>

<template>
  <main>
    <h2>Рассрочка или Cash Back в «Домотехнике»</h2>
    <NewsCard 
      datePublish="2020-06-18" 
      title="Рассрочка или Cash Back в «Домотехнике»" 
      shortText="Не упусти свой правильный выбор!"
      image="/image-1.png"
    />
  </main>
</template>