<script>
import SelectFilter from './SelectFilter.vue';
import SingleCard from '../components/SingleCard.vue'

// Import Store.js
import { store } from '../store';

export default {
    name: 'AppMain',
    components: {
        SingleCard,
        SelectFilter
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="jumbotron">
        <div class="text-jumbotron">
            <h3 class="title-jumbotron">25TH ANNIVERSARY RARITY COLLECTION</h3>
            <p>
                Get Your Super Ultra Secret Platinum Quarter Century Ultimate Collector Rare Card!
            </p>

            <button class="btn btn-primary" type="submit">BUY NOW</button>
        </div>
    </div>

    <div class="container">
        <div class="title-category">
            <div class="logo">
                <img src="../../public/img/Yu-Gi-Oh logo.png" alt="Yu-Gi-Oh Logo">
            </div>

            <SelectFilter @performSelect="getCard" />
        </div>

        <div class="row">
            <div v-for="card in store.cardList" :key="card.id" class="col-6 col-md-4 col-lg-3 mb-5 cards">
                <SingleCard :info="card" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.jumbotron {
    background-image: url(../../public/img/Exodia-Banner.png.png);
    height: 400px;
    background-size: cover;
    background-position: bottom;
    position: relative;

    .text-jumbotron {
        position: absolute;
        top: 29%;
        left: 18%;
        color: #ffff;

        .title-jumbotron {
            font-size: 50px;
            font-weight: 700;
        }

        p {
            font-size: 20px;
        }
    }

}

.title-category {
    display: flex;
    justify-content: space-between;
    align-items: end;
    border-bottom: 1px solid black;
    margin-bottom: 70px;

    .logo {


        img {
            width: 180px;
            margin-bottom: -55px;
        }
    }
}

.cards {
    display: flex;
    justify-content: space-around;
}
</style>
