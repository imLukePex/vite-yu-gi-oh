<script>
// Import Axios
import axios from 'axios';

// import HelloWorld from './components/HelloWorld.vue'
import AppHeader from './components/AppHeader.vue'
import AppSearch from './components/AppSearch.vue';
import AppMain from './components/AppMain.vue'

// Import Store.js
import { store } from './store';

export default {
    components: {
        AppHeader,
        AppSearch,
        AppMain
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        getCard() {
            let myUrl = store.apiURL;
            let myArchUrl = store.archApiURL;

            // se utente ha fatto una ricerca
            if (store.searchCard !== "") {
                myUrl += `?${store.nameParam}=${store.searchCard}`;
            }

            if (store.searchArch) {
                myUrl += `&${store.archParam}=${store.searchArch}`;
            }
            axios
                .get(myUrl)
                .then((res => {
                    console.log(res.data.data);
                    store.cardList = res.data.data;
                }))
                .catch((err) => {
                    console.log("Errori", err);
                });

            axios
                .get(myArchUrl)
                .then((res => {
                    console.log(res.data);
                    store.archList = res.data;
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
    <AppSearch @performSearch="getCard" />
    <main>
        <AppMain />
    </main>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
