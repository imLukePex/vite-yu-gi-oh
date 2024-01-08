<script>
export default {
    name: 'SingleCard',
    props: {
        info: Object
    }
}
</script>

<template>
    <div class="card text-center">
        <img class="img-fluid mb-3" :src="info.card_images[0].image_url" :alt="info.name">
        <h4>{{ info.name }}</h4>
        <div>{{ info.archetype }}</div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.card {
    border: none;
    width: 230px;

    img {
        width: 230px;
    }

    h4 {
        font-size: 20px;
        color: #012169;
    }
}
</style>
