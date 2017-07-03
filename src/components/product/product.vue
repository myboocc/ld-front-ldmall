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
  <div  class="product" transition="fadeInLeft" v-el:product>
    <div class="productContent">
      <!--轮播图-->
      <d-carousel v-if="productPics.length" classpage="app-pagination" :list="productPics"></d-carousel>

      <div class="productInfo">
        <div class="titleWrapper">
          <div class="title">
            <span class="preSell">[预售]</span>H.S MAKE 花觅食 佛手柑蜂王浆面膜 25Gx5片/盒 HYDRO SAPIENS
          </div>
          <div class="subTitle" v-if="product.subTitle">
            【预售第一名付尾款半价，2-50名付尾款返现100元+干衣架，51-100名付尾款返现50元+干衣架】【5月5-14日下定金即送排插A1C02L1.2-A5】
          </div>
          <div class="priceWrapper">
            <div class="price">
              ￥&nbsp;<span class="priceNumber">{{product.price}}</span><del v-if="product.oldPrice" class="oldPrice">¥ 2498.00</del>
            </div>

          </div>
        </div>

      </div>


    </div>
  </div>
</template>

<script type="text/ecmascript-6">
//  import BScroll from 'better-scroll';
  import carouselDetail from 'components/swiper/carouselDetail';
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
      this.fetchProduct(this.$route.query.productId);
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
                return;
              }
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
      'd-carousel': carouselDetail
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
