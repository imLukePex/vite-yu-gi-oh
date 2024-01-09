<script>
// Import Store.js
import { store } from '../store';

export default {
    name: 'ResultMessage',
    data() {
        return {
            store,
        }
    },
    computed: {
        resultNumber() {
            return store.cardList.length;
        }
    }
}
</script>

<template>
    <section v-if="resultNumber > 0" class="text-center fw-bold">Found {{ resultNumber }}</section>
    <section v-else class="text-center fw-bold">No results found for {{ store.searchCard }}</section>
</template>

<style lang="scss" scoped></style>
