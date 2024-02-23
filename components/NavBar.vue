<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <NuxtLink class="navbar-brand" to="/">
                <img src="/sdcc-icon.png" alt="SDCC Logo" width="32" height="32" class="d-inline-block align-text-top" />
                島根データセンター友の会
            </NuxtLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <NuxtLink class="nav-link" to="/">本団体について</NuxtLink>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            相互接続
                        </a>
                        <ul class="dropdown-menu">
                            <li><NuxtLink class="dropdown-item" to="/interconnect">相互接続</NuxtLink></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><NuxtLink class="dropdown-item" to="/peering-policy">Peering Policy</NuxtLink></li>
                            <li><NuxtLink class="dropdown-item" to="/sdcc-ix">SDCC Internet Exchange</NuxtLink></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link" to="/join">入会方法</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link" to="/accidentinfo">障害情報</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link" to="/maintenance">メンテナンス情報</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.navbar-brand>img {
    margin-right: 5px;
}</style>: