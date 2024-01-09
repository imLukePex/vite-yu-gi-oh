<script>
// Import Store.js
import { store } from '../store';

export default {
    name: 'AppSearch',
    data() {
        return {
            store,
        }
    },
    methods: {
        resetSearch() {
            store.searchCard = "";
            this.$emit('performSearch');
        }
    }
}
</script>

<template>
    <nav class="navbar navbar-dark j-flex">
        <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Cerca Cardmarket..." aria-label="Search"
                v-model.trim="store.searchCard">
            <button class="btn btn-primary me-2" type="submit" @click.prevent="$emit('performSearch')">Search</button>
            <button class="btn btn-warning" type="reset" @click="resetSearch">Reset</button>
        </form>
    </nav>
</template>

<style lang="scss" scoped>
.j-flex {
    justify-content: center;
    background-color: #012169;

    .form-control {
        padding-right: 800px;
        font-size: 14px;
    }
}
</style>
