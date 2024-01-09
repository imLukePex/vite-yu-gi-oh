import { reactive } from 'vue'

export const store = reactive({
    cardList: [],
    apiURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
    searchCard: "",
    nameParam: "name",

    archList: [],
    archApiURL: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    searchArch: "",
    archParam: "archetype"
})