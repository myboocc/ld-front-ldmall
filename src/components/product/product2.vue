<template>
  <!--<div v-if="$loadingRouteData">-->
    <!--<div class="white-widget grey-bg author-area">-->
      <!--<div class="auth-info row">-->
        <!--<div class="timeline-wrapper">-->
          <!--<div class="timeline-item">-->
            <!--<div class="animated-background">-->
              <!--<div class="background-masker header-top"></div>-->
              <!--<div class="background-masker header-left"></div>-->
              <!--<div class="background-masker header-right"></div>-->
              <!--<div class="background-masker header-bottom"></div>-->
              <!--<div class="background-masker subheader-left"></div>-->
              <!--<div class="background-masker subheader-right"></div>-->
              <!--<div class="background-masker subheader-bottom"></div>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
  <!--</div>-->

  <!--<div  class="product" transition="fadeInLeft" v-el:product>-->
    <!--<div class="productContent">-->
      <!--&lt;!&ndash;轮播图&ndash;&gt;-->
      <!--<d-carousel v-show="showCarousel" classpage="app-pagination" :list="productPics"></d-carousel>-->
    <!--</div>-->
    <!--<a>{{product}}</a>-->
  <!--</div>-->
  <div  class="product" transition="fadeInLeft" v-el:product>
    <div class="productContent">
      <p>asjkldsajl</p>
      <!--轮播图-->
      <div v-if="recommends.length" class="slider-wrapper">
        <slider>
          <div v-for="item in recommends">
            <a :href="item">
              <img :src="item">
            </a>
          </div>
        </slider>
      </div>
    </div>
    <a>{{product}}</a>
  </div>
</template>

<script type="text/ecmascript-6">
//  import BScroll from 'better-scroll';
  import carouselDetail from 'components/swiper/carouselDetail';
  import slider from 'components/slider/slider';
  const ERROR_OK = 0;

  export default {
    props: {
      product: {
        type: Object
      }
    },
    data() {
      return {
        showFlag: true,
        showCarousel: false,
        productPics: [],
        recommends: []
      };
    },
    created() {
//      this.fetchProduct(this.$route.query.productId);
      this._getRecommend();
    },
    route: {
      activate() {
        console.log('缓存的组件又出现了，我是不是要重新拉取数据呢？');
      },
      data: function (transition) {
        console.log('jin ru route data');
        this.fetchProduct(this.$route.query.productId, transition);
      },
      waitForData: true
    },
    methods: {
      _getRecommend() {
//        this.$http.get('/api/seller').then((res) => {
//          if (res.code === ERR_OK) {
//            this.recommends = res.data.slider
//          }
//        });
        var newId = parseInt(this.$route.query.productId);
        this.$http.get('/api/seller').then((response) => {
          response = response.body;
          if(response.errno === ERROR_OK ){
            var goods = response.data.goods;
            goods.forEach((product) => {
              if(product.id === newId){
                this.recommends = product.pics;
                console.log('找到匹配到的数据了');
              }
            });
          }
        });
      },
      show() {
        this.showFlag = true;
//        this.$nextTick(() => {
//          if(!this.scroll){
//            this.scroll = new BScroll(this.$els.food, {
//              click: true
//            });
//          }else{
//            this.scroll.refresh();
//          }
//        });
      },
      hide() {
        this.showFlag = false;
      },
      fetchProduct(productId, transition) {
        var newId = parseInt(productId);
        console.log('zhi xing le productId==' + newId);
        this.$http.get('/api/seller').then((response) => {
          response = response.body;
          if(response.errno === ERROR_OK ){
            var goods = response.data.goods;
            goods.forEach((product) => {
              if(product.id === newId){
                this.productPics = product.pics;
                this.showCarousel = true;
                console.log('找到匹配到的数据了');
                console.log(this.productPics);
                transition.next();
//                return;
              }
//              console.log(product);
            });
          }
        });
      }
    },
    watch: {
//      '$route' (to, from) {
//        this.fetchProduct(this.$route.query.productId);
//      }
    },
    components: {
      'd-carousel': carouselDetail,
      slider
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .product
    position: fixed;
    left: 0;
    top: 0;
    bottom :48px;
    z-index:300;
    width: 100%;
    background: #fff;
    .productContent
      height: 100%;
      overflow: hidden;
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
    &.move-transition
      transition:all 0.2s linear;
      transform :translate3D(0,0,0);
    &.move-enter, &.move-leave
      transform :translate3D(100%,0,0);
</style>
