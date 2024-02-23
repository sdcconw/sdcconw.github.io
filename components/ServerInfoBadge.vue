<script setup lang="ts">
const serverInfo = ref<string>('Loading');

fetch('/serverinfo.json')
    .then(response => response.json())
    .then(data => {
        serverInfo.value = data.server ?? 'Unknown';
    })
    .catch(error => {
        serverInfo.value = 'Unknown';
    });
</script>

<template>
    <div class="server-info-badge">
        <span class="server-info-badge-pre-text">Served from</span>
        <span class="server-info-badge-server-info">{{ serverInfo }}</span>
    </div>
</template>

<style scoped lang="scss">
.server-info-badge {
    display: inline-block;
    color: white;
    margin-left: 15px;

    span {
        padding: 2px 5px;
    }

    .server-info-badge-pre-text {
        background-color: #337ab7;
    }

    .server-info-badge-server-info {
        background-color: darkorange;
    }
}
</style>