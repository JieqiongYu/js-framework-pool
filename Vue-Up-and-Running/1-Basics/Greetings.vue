<template>
    <div id="app">
        <p v-if="isMorning">Good morning!</p>
        <p v-if="isAfternoon">Good afternoon!</p>
        <p v-if="isEvening">Good evening!</p>
    </div>
</template>

<script>
    var hours = new Date().getHours();

    new Vue( {
        el: '#app',
        data: {
            isMorning: hours < 12, 
            isAfternoon: hours >= 12 && hours < 18,
            isEvening: hours >=18
        }
    });
</script>