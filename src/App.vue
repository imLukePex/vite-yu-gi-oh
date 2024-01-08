<script>
// Import Axios
import axios from 'axios';

// import HelloWorld from './components/HelloWorld.vue'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'

// Import Store.js
import { store } from './store';

export default {
    components: {
        AppHeader,
        AppMain
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        getCard() {
            axios
                .get(store.apiURL)
                .then((res => {
                    console.log(res.data.data);
                    store.cardList = res.data.data;
                }))
                .catch((err) => {
                    console.log("Errori", err);
                });
        }
    },
    created() {
        this.getCard();
    }
}
</script>

<template>
    <AppHeader />
    <main>
        <AppMain />
    </main>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
