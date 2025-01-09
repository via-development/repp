<template>
    <div class="bg-[#0F0E0F] p-2 rounded mb-2">
        <h1 class="text-white text-sm"># {{ ChannelName }}</h1>
        <div class="mt-1 flex justify-between text-[12px] text-[#6B6B6B] font-[Gothamb]">
            <p>{{ totalMessages }} MESSAGES</p>
            <p>({{ weeklyMessages }} THIS WEEK)</p>
        </div>
    </div>
</template>
    
<script>
    export default {
        name: 'ChannelVue',
        props: {
            ChannelName: {
                type: String,
                required: true 
            }
        },
        data() {
            return {
                totalMessages: 0,
                weeklyMessages: 0
            }
        },
        mounted() {
            this.totalMessages = this.getRandomNumber(100, 500); 
            this.weeklyMessages = this.getRandomNumber(10, 100);
        },
        methods: {
            getRandomNumber(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
        }
        
    }
</script>
    
    