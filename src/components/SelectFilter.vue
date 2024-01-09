<script>
// Import Store.js
import { store } from '../store';

export default {
    name: 'SelectFilter',
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
    <select name="select-status" id="card-type" v-model="store.searchArch" @change="$emit('performSelect')">
        <option value="" selected>Select an archetype</option>
        <option v-for="(type, i) in store.archList" :key="i" :value="type.archetype_name">{{ type.archetype_name }}</option>
    </select>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

select {
    width: 200px;
    height: 30px;
    font-size: 15px;
    margin-bottom: 12px;
    background-color: rgb(49, 40, 40);
    color: #ffff;
}
</style>
