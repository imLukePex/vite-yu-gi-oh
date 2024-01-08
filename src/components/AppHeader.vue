<script>
export default {
    name: 'AppHeader'
}


</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <img src="../../public/img/Cardmarket-Logo.png.png" alt="CardMarket Logo">
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                YU-GI-OH!
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Cards</a></li>
                                <li><a class="dropdown-item" href="#">Decks</a></li>
                                <li><a class="dropdown-item" href="#">Tier List</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <button class="btn btn-outline-primary" type="submit">Contacts Us</button>
            </div>
        </nav>

        <nav class="navbar navbar-dark j-flex">
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Cerca Cardmarket..." aria-label="Search">
                <button class="btn btn-light" type="submit">Search</button>
            </form>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
img {
    width: 180px;
    margin-right: 25px;
}

a {
    font-size: 12px;
    display: flex;
    align-items: center;
    color: #012169;
}

.j-flex {
    justify-content: center;
    background-color: #012169;

    .form-control {
        padding-right: 800px;
        font-size: 14px;
    }
}
</style>
