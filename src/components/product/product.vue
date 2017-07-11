<template>
  <div  class="product" transition="fadeInLeft" v-el:product-wrapper>
    <div class="productContent" v-el:product-content>
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
          <div class="price">
            ￥<span class="priceNumber">{{product.price}}</span><del v-if="product.oldPrice" class="oldPrice">¥ 2498.00</del>
          </div>
          <div class="freightWrapper">
            <span v-if="!product.freight">运费：免运费</span>
            <span v-if="product.freight">运费：{{product.freight}}</span>
          </div>
        </div>
        <split></split>
        <div class="storeInfo">
          <div class="storeName">
            <a href="#" class="storeLink clearfix">
              <div class="name">
                <span class="icon icon-home"></span>
                <span class="text">LD乐蒂</span>
              </div>
              <div class="enterStore">
                <span>进入店铺</span>
              </div>
            </a>
          </div>
          <div class="storeRenZheng">
            <span class="renzhengItem">
              <span class="renzhengPic"></span>
              <span class="text">企业认证</span>
            </span>
            <span class="renzhengItem">
              <span class="renzhengPic"></span>
              <span class="text">担保交易</span>
            </span>
          </div>
        </div>
        <split></split>
        <!--详情-->
        <div class="detailWrapper" v-if="description" v-html="description"></div>
      </div>


    </div>
  </div>
  <shopcart></shopcart>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
  import carouselDetail from 'components/swiper/carouselDetail';
  import shopcart from 'components/shopcart/shopcart';
  import split from 'components/split/split';

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
        scrollY: 0,
        contentHeight: 0,
        recommends: [],
        description: '<div class="module-container j-atp item_picture" data-atp=",," data-spm=""><h3 class="module-title">商品图片</h3><div class="module-content"><div class="mui-custommodule mdv-custommodule" data-mod-name="mui/mdv/zebra">	<div class="mui-custommodule-item">	<img class="lazyImg img-ks-lazyload" alt="" src="https://img.alicdn.com/imgextra/i3/1956718685/TB2TTC9gCvHfKJjSZFPXXbttpXa_!!1956718685.jpg_790x10000Q30.jpg"></div><div class="mui-custommodule-item">	<img class="lazyImg img-ks-lazyload" alt="" src="https://img.alicdn.com/imgextra/i3/1956718685/TB2TTC9gCvHfKJjSZFPXXbttpXa_!!1956718685.jpg_790x10000Q30.jpg"></div><div class="mui-custommodule-item">	<img class="lazyImg img-ks-lazyload" alt="" src="https://img.alicdn.com/imgextra/i4/1956718685/TB28.a.spXXXXa.XXXXXXXXXXXX_!!1956718685.jpg_790x10000Q30.jpg"></div><div class="mui-custommodule-item">	<img class="lazyImg img-ks-lazyload" alt="" src="https://img.alicdn.com/imgextra/i1/1956718685/TB2UBmDspXXXXaKXpXXXXXXXXXX_!!1956718685.jpg_790x10000Q30.jpg"></div><div class="mui-custommodule-item">	<img class="lazyImg img-ks-lazyload" alt="" src="https://img.alicdn.com/imgextra/i1/1956718685/TB2UBmDspXXXXaKXpXXXXXXXXXX_!!1956718685.jpg_790x10000Q30.jpg"></div><div class="mui-custommodule-item">	<img class="lazyImg img-ks-lazyload" alt="" src="https://img.alicdn.com/imgextra/i1/1956718685/TB2UBmDspXXXXaKXpXXXXXXXXXX_!!1956718685.jpg_790x10000Q30.jpg"></div><div class="mui-custommodule-item">	<img class="lazyImg img-ks-lazyload" alt="" src="https://img.alicdn.com/imgextra/i1/1956718685/TB2UBmDspXXXXaKXpXXXXXXXXXX_!!1956718685.jpg_790x10000Q30.jpg"></div><div class="mui-custommodule-item"><img class="lazyImg img-ks-lazyload" alt="" src="https://img.alicdn.com/imgextra/i4/1956718685/TB2Tb1fbCFmpuFjSZFrXXayOXXa_!!1956718685.jpg_790x10000Q30.jpg"></div></div></div></div>'
      };
    },
    created() {
//      this.fetchProduct(this.$route.query.productId);
//      let self = this;
//      setTimeout(function () {
//        self._initScroll();
//      }, 300);
      this.$nextTick(() => {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
//        console.log(document.body.scrollTop);
        this._initScroll();
      });
    },
    ready() {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
//      console.log(document.body.scrollTop);
    },
    route: {
      activate() {
        console.log('缓存的组件又出现了，我是不是要重新拉取数据呢？');
//        console.log(to);
      },
      data: function (transition) {
        console.log('jin ru route data');
        this.fetchProduct(this.$route.query.productId, transition);
      },
      waitForData: true
    },
    methods: {
      _initScroll() {
        if(!this.scrollProduct){
          this.scrollProduct = new BScroll(this.$els.productWrapper, {
            probeType: 1,
            click: true
          });
          this.scrollProduct.on('scroll', (pos) => {
            this.contentHeight = this.$els.productContent.clientHeight;
            this.scrollY = Math.abs(Math.round(pos.y));
            console.log(this.scrollY);
            console.log(this.contentHeight);
            if(this.contentHeight > this.scrollY){
              console.log('重新刷新');
              this.scrollProduct.refresh();
            }
          });
          console.log('执行创建，，，');
        }else{
          this.scrollProduct.scrollTo(0, 500);
          this.scrollProduct.refresh();
          console.log('执行刷新，，，。。。');
        }
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
                this.product = product;
                this.productPics = product.pics;
                this.showCarousel = true;
                console.log(this.product);
                transition.next();
                this.$dispatch('show.tab', false);
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
    events: {
      'productSwiper.ok'() {
        this.$nextTick(() => {
          console.log('ppppp----');
          let self = this;
          setTimeout(function () {
            self._initScroll();
          }, 30);
        });
      }
    },
    components: {
      'd-carousel': carouselDetail,
      split,
      shopcart
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .product
    position: fixed;
    left: 0;
    top: 0;
    bottom :50px;
    z-index:300;
    width: 100%;
    background: #fff;
    overflow: hidden;
    .productContent
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
      .productInfo
        box-sizing :border-box;
        background: #fff;
        .titleWrapper
          padding: 15px;
          .title
            color: #333;
            margin-bottom :4px;
            font-size :14px;
            word-wrap : break-word;
            word-break :break-all;
            line-height :1.25;
            .preSell
              color: #f60;
          .subTitle
            font-size :12px;
            line-height: 14px;
            color: #f60;
          .price
            padding: 4px 0;
            font-size :14px;
            color: #F60;
            border-bottom :1px solid #e5e5e5;
            .priceNumber
              font-size :24px;
            .oldPrice
              color: #999;
              font-size :13px;
              margin-left :4px;
          .freightWrapper
            padding: 10px 0;
            padding-bottom :0;
            color: #999;
            font-size :12px;
        .storeInfo
          padding-left: 15px;
          .storeLink
            display: block;
          .storeName
            position: relative;
            padding: 10px 10px 10px 0;
            border-bottom :1px solid #e5e5e5;
            font-size :14px;
            &:after
              content: '';
              position: absolute;
              top: 13px;
              right: 12px;
              width: 7px;
              height: 7px;
              border-top: 2px solid #cbc9cc;
              border-right: 2px solid #cbc9cc;
              transform: rotate(45deg);
            .name
              float: left;
            .enterStore
              float: right;
              padding-right :15px;
          .storeRenZheng
            padding: 10px 10px 10px 0;
            font-size :12px;
            .renzhengItem
              margin-right :16px;
            .renzhengPic
              display: inline-block;
              width: 13px;
              height: 13px;
              background-image :url('https://img.alicdn.com/imgextra/i1/1078291725/TB2zdPLAbxmpuFjSZJiXXXauVXa_!!1078291725.png');
              background-repeat :no-repeat;
              background-size :58px 48px;
              vertical-align: middle;
              background-position: -18px -30px;
              margin-right :3px;
      .detailWrapper
        width: 100%;
        img
          width: 100%;
    &.move-transition
      transition:all 0.2s linear;
      transform :translate3D(0,0,0);
    &.move-enter, &.move-leave
      transform :translate3D(100%,0,0);

</style>
