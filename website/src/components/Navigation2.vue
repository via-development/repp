<template>
    <div class="bg-gradient-to-r from-[#212F86] to-[#483297]">
        <div class="flex text-white justify-between max-w-[1040px] px-4 mx-auto pt-6 pb-6">
            <div class="flex gap-2">
            <img class="bg-[#161416] w-10 h-10 p-2 rounded shadow-md" alt="REPP Logo" src="../assets/repp.png">
            <a href="https://google.com" class="text-base bg-[#161416] p-2 px-4 rounded shadow-md">My Servers</a>
            </div>
            <div class="flex">
                <div class="bg-[#161416] p-2 px-4 rounded-l shadow-md">
                    <h3 class="text-base">{{ username }}</h3>
                </div>
                <img :src="userImage" class="w-10 h-10 bg-[#161416] rounded-r" alt="Discord Avatar" />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'NavigationBar',

        computed: {
            userImage() {
                return `https://cdn.discordapp.com/avatars/${this.userid}/${this.avatar}.png`;
            }
        },
        props: {
            username: {
                type: String,
                required: true 
            },
            userid: {
                type: String,
                required: true 
            },
            avatar: {
                type: String,
                required: true 
            }
        }

    }
</script>
