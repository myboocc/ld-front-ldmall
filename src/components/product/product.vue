<template>
  <div v-show="showFlag" class="product" transition="fadeInLeft" v-el:product>
    <div class="productContent">
      <!--轮播图-->
      <!--<d-carousel id="swiperViewDetail" classpage="app-pagination" :list="product.pics"></d-carousel>-->
    </div>
    <a>{{product}}</a>
  </div>
</template>

<script type="text/ecmascript-6">
//  import BScroll from 'better-scroll';
  import carouselDetail from 'components/swiper/carouselDetail';

  export default {
    props: {
      product: {
        type: Object
      }
    },
    data() {
      return {
        showFlag: true,
        productPics: []
      };
    },
    created() {
      this.fetchProduct();
    },
    activated() {
      console.log('缓存的组件又出现了，我是不是要重新拉取数据呢？');
    },
    methods: {
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
      fetchProduct() {
        console.log('zhi xing le');
        this.product = this.$route.query.selectProduct;
        console.log(this.product);
      }
    },
    watch: {
      '$route' (to, from) {
        this.product = this.$route.query.selectProduct;
      }
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
    &.move-transition
      transition:all 0.2s linear;
      transform :translate3D(0,0,0);
    &.move-enter, &.move-leave
      transform :translate3D(100%,0,0);
</style>
