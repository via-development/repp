<template>
    <div class="bg-[#0F0E0F] p-2 rounded mb-2">
        <div class="flex gap-1">
            
            <img v-if="ActionName =='Ban'" alt="Ban Icon" class="w-4 h-4" src="../assets/repp.png">
            <img v-if="ActionName =='Warn'" alt="Warn Icon" class="invert w-4 h-4 gap" src="../assets/icons/warning.png">
            <img v-if="ActionName =='Timeout'" alt="Timeout Icon" class="invert w-4 h-4 gap" src="../assets/icons/timeout.png">
            <h1 class="text-white text-sm">{{ ActionName }}</h1>
        </div>
        <div class="mt-1 text-[12px] text-[#6B6B6B] font-[Gothamb]">
            <p>{{funnymessage}}</p>
        </div>
    </div>
</template>
    
<script>
    export default {
        name: 'ActionsVue',
        props: {
            ActionName: {
                type: String,
                required: true 
            }
        },
        data() {
            return {
                funnymessage:"",
            }
        },
        mounted() {
            var things = [
                "Hurting my feelings",
                "Using bots in chat",
                "Don't talk to me",
                "Stealing my food",
                "Sending too many memes...",
                "<Default message here>",
                "Rawr",

            ];
            this.funnymessage=things[Math.floor(Math.random()*things.length)];
        }
    }
</script>