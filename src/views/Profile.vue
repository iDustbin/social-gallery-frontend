<template>
  <div>
    <Header/>
    <main>
      <Post
        :posts="posts"
        :loading="loadingData"
      />
    </main>
  </div>
</template>
<script>
  import axios from "axios";
  import config from "@/config";
  import Header from "@/components/Header.vue";
  import Post from "@/components/Post.vue"

  export default {
    name: "Profile",
    data() {
      return {
        posts: [],
        loadingData: true
      }
    },
    components: {
      Header,
      Post
    },
    mounted() {
      console.log(this.$route.params.name);
      axios.defaults.headers.common['Content-Type'] = 'application/json';
      const url = `${config.apiBaseUrl}/update`;
      const data = {
        "profile": 'idustbin'
      };
      axios
        .post(url, data)
        .then(response => {
          this.posts = response.data.data;
          this.loadingData = false;
        })
        .catch(error => {
          this.loadingData = false;
          this.error = error;
        });
    }
  }
</script>

<style scoped>

</style>
