<script>
export default {
    name: 'AppHeader'
}
</script>

<template>
    <header>
        <nav class="navbar bg-light">
            <div class="container-fluid">
                <div class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <img src="../../public/img/Cardmarket-Logo.png.png" alt="CardMarket Logo">
                        YU-GI-OH!
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
                <button class="btn btn-outline-success" type="submit">Contacts</button>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
a {
    font-size: 13px;
    display: flex;
    align-items: center;

    img {
        width: 200px;
        margin-right: 25px;
    }
}
</style>
