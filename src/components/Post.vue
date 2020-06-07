<template>
  <div class="container">

        <div class="gallery">
        
          <div v-for="(post, index) in posts" class="figure" :key="index">

          <figure class="pic3">
 
            <img :src="baseUrl+post" class="" alt="">
            

            <br>
            <br>

            <figcaption>

              
                <span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 56</li>
                <span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 2</li>
           

            </figcaption>
          </figure>

          </div>
        </div>

        <!-- End of gallery -->

        <div v-if="loading" class="loader"></div>
      </div>
</template>

<script>
  import config from "@/config";
  export default {
    name: 'Post',
    data() {
      return {
        baseUrl: config.baseDataUrl
      }
    },
    props: {
      posts: {
        type: Array,
        default: []
      },
      loading: true
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .visually-hidden {
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
  }


figure img{
  
  margin:0;
  vertical-align: middle;
  max-width: 100%;

}

figure{
  float:left;
  position:relative;
  background-color:white;
  text-align:center;
  padding:10px;
  margin:10px;
  border-radius:3px;
  box-shadow:5px 5px 10px;
      -webkit-box-shadow:0px 0px 10px rgba(0,0,0,1);
    -moz-box-shadow:0px 0px 10px rgba(0,0,0,1);
    box-shadow:0px 0px 10px rgba(0,0,0,1);
    -webkit-transition:all .30s;
    -moz-transition:all .30s;
    -o-transition:all .30s;
    transition:all .30s;
    flex: 25%;
    max-width: 25%;
}

.pic1{
  position:relative;
  top:10px;
  left:-30px;
  transform:rotate(-20deg);
 
}

.pic2{
  position:relative;
  top:30px;
  right:35px;
  z-index:20px;
  transform:rotate(10deg);
}

.pic3{
  position:relative;
  top:5px;
  z-index:20px;
  max-width: 100%;
}

figure:hover{
  transform:scale(2,2);
  z-index:100;
}

@media screen and (max-width: 800px) {
    figure {
        flex: 50%;
        max-width: 50%;
    }
}

@media screen and (max-width: 600px) {
    figure {
        flex: 100%;
        max-width: 100%;
    }
}

 
  /* Loader */

  .loader {
    width: 5rem;
    height: 5rem;
    border: 0.6rem solid #999;
    border-bottom-color: transparent;
    border-radius: 50%;
    margin: 0 auto;
    animation: loader 500ms linear infinite;
  }

  /* Media Query */

  /* Spinner Animation */

  @keyframes loader {
    to {
      transform: rotate(360deg);
    }
  }

  /*

  The following code will only run if your browser supports CSS grid.

  Remove or comment-out the code block below to see how the browser will fall-back to flexbox & floated styling.

  */

  @supports (display: grid) {
    .gallery {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
      grid-gap: 2rem;
    }

    .gallery-item,
    .gallery {
      width: auto;
      margin: 0;
    }
  }

</style>
