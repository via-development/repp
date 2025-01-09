<template>
    <NavigationBar :username="username" :userid="userid" :avatar="avatarHash"/>
    <h1 class="text-white text-center text-5xl mt-12">Coming soon!</h1>
    
    

    
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
            };
        },
        async created() {
          await this.setVars();
        },
        methods: {
            async setVars() {
                const userdata = await this.$loadUserData(this.$router);
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