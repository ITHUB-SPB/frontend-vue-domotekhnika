<script setup lang="ts">
defineProps<{
    datePublish: string,
    title: string,
    shortText: string,
    image: string
}>()

function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('ru', {
        day: "2-digit",
        month: "long",
        year: "numeric"
    })
}
</script>

<template>
    <article>
        <img :src="image" />
        <div>
            <span>{{ formatDate(datePublish) }}</span>
            <h3>{{ title }}</h3>
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