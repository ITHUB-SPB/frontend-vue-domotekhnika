<script setup lang="ts">
import { RouterLink } from 'vue-router';
import type { NewsOverview } from '@/types';
defineProps<NewsOverview>()

function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString('ru', {
        day: "2-digit",
        month: "long",
        year: "numeric"
    })
}
</script>

<template>
    <article>
        <img v-if="image" :src="image" />
        <img v-else src="/image-1.png" />
        <div>
            <span>{{ formatDate(datePublish) }}</span>
            <h3>
                <RouterLink :to="slug" >{{ title }}</RouterLink>
            </h3>
            <p>{{ shortText }}</p>
        </div>
    </article>
</template>

<style scoped>
article {
    display: flex;
    gap: 16px;
}
img {
    height: 200px;
    width: 200px;
}
</style>