<script>
  import axios from 'axios';
  
  export default {
    mounted() {
      this.getAuthToken();
    },
    methods: {
      async getAuthToken() {

        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        if (code) {
          const response = await axios.get('http://localhost:3030/auth', {
            params: {
              code: code
            }
          });
          localStorage.setItem('authToken', response.data);
          this.$router.push({ name: 'serverselect' });
        } else {
          this.$router.push({ name: 'autherror' });
        }
      },
    }
  }
</script>