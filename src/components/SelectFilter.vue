<script>
// Import Store.js
import { store } from '../store';

export default {
    name: 'SelectFilter',
    data() {
        return {
            store,
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
    background-color: rgb(50, 41, 41);
    color: #ffff;
}
</style>
