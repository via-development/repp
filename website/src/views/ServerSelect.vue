<template>
    <NavigationBar :username="username" :userid="userid" :avatar="avatarHash"/>
    <h1 class="text-white text-center text-5xl mt-12">Select a Server</h1>
    <div v-if="loading">
        <div class="flex justify-center gap-1 mt-8 w-[1040px] mx-auto">
        <div v-for="n in 3" :key="n" class="p-6 w-full text-center">
            <div class="w-full h-36 bg-gray-700 rounded-xl mx-auto mb-4 animate-pulse"></div>
            <div class="">
                <div class="flex justify-between">
                    <div class="content-center">
                        <div class="h-3 bg-gray-700 rounded w-[100px] mb-2 animate-pulse"></div>
                        <div class="h-2 bg-gray-700 rounded w-[80px] animate-pulse"></div>
                    </div>
                    <div class=" h-8 bg-gray-700 rounded w-[100px] animate-pulse"></div>
                </div>
            </div>
        </div>
        </div>
    </div>
    <div v-else>
        <div class="grid grid-cols-3 gap-1 mt-8 w-[1040px] mx-auto">
            <div v-for="n in serverdata" :key="n" class="p-6 w-full">
                <div class="w-full h-36 rounded-xl mx-auto mb-4 animate-pulse"></div>
                <div class="">
                    <div class="flex justify-between">
                        <div class="self-start text-white">
                            <h1 class="text-xl">{{ n.name }}</h1>
                            <p class=" text-sm">Admin</p>
                        </div>
                        <div class=" h-8 bg-gray-700 rounded w-[100px] animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
</template>

<script>
    import NavigationBar from '@/components/Navigation2.vue'

    export default {
        data() {
            return {
                loading: true,
                username: 'user',
                avatarHash: '',
                userid: '',
                serverdata: {}
            };
        },
        async created() {
          await this.setVars();
        },
        methods: {
            async setVars() {
                const userdata = await this.$loadUserData(this.$router);
                const serverdata = await this.$getUserServers();
                this.serverdata  = serverdata;
                this.username = userdata.username;
                this.avatarHash = userdata['avatar'];
                this.userid = userdata.id;
                this.loading = false;
            }
        },
        components: {
            NavigationBar
        }
    }
</script>