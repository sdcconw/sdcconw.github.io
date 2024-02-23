<script setup lang="ts">
defineProps({
    title: String
});
</script>

<template>
    <Head>
        <Title>{{ title }} | 島根データセンター友の会</Title>
    </Head>
    <header>
        {{ title }}
    </header>
</template>

<style scoped lang="scss">
header {
    min-height: 50px;
    background-color: #337ab7;
    color: white;
    text-align: center;
    padding: 10px 0;
    font-size: 35px;
    margin-bottom: 25px;
}
</style>