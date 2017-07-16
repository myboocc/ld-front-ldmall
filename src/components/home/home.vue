<template>
  <transition name="fadeOutLeft">
    <div class="home" :class="{'bottom50':bottom50}" ref="homeWrapper">
      <scroll class="homeContent" ref="scroll"
              :data="goods" @scroll="scroll" :probe-type="probeType" :listen-scroll="listenScroll">
        <div>
          <!-- 轮播广告 -->
          <div class="carousel" :style="{height: _carouselHeight}">
            <carousel id="swiperView" classpage="app-pagination" :list="pics">
              <a href="javascript:void(0);" class="swiper-slide" v-for="item in pics" :style="{backgroundImage: buildBackgroundUrl(item),height: swiperHeight}"></a>
            </carousel>
          </div>
          <!--广告区域 -->
          <div class="adWrapper">
            <img :src="adPic" width="100%" height="auto">
          </div>

          <recommand-bar :title="recommandTitle" :desc="desc" :isDetail="false"></recommand-bar>
          <!--<split></split>-->
          <!-- 产品列表  v-link="{ path: '/product', query: { productId: item.id }}" v-link="{path:'/series'}"@click="selectProduct(item,$event)" v-link="{ name: 'product', params: { selectProduct: item }}" -->
          <div class="recommand_wrapper">
            <ul class="item-list">
              <li class="item" @click="selectItem(item)" v-for="(item,index) in goods">
                <div class="pic">
                  <img @load="loadImage" :src="item.image">
                  <!--<div class="sku-tag sku_tag_important" v-show="item.sku-tag">{{item.sku-tag}}</div>-->
                </div>
                <div class="info">
                  <div class="title">{{item.title}}</div>
                  <div class="sub-title">
                    <span class="pre_sell" v-show="item.preSell && item.preSell === true">[预售]</span> {{item.subTitle}}
                  </div>
                  <div class="price-info clearfix">
                    <div class="price">
                      ¥&nbsp;{{item.price}}
                    </div>
                    <div class="collect">
                      <i class="icon-index icon-collect"></i>
                      <span class="collect-count">{{item.collectCount}}</span>
                    </div>
                  </div>
                </div>
                <split v-show="index != goods.length-1"></split>
              </li>
            </ul>
            <div class="bottomZone"></div>
          </div>
        </div>
      </scroll>
      <tab ref="tab"></tab>
      <router-view></router-view>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll';
  import Tab from 'components/tab/tab';
  import Carousel from 'components/swiper/carousel';
  import Split from 'components/split/split';
  import RecommandBar from 'components/recommandBar/recommandBar';
  import Product from 'components/product/product';
  import {ERR_OK} from 'api/config';
  import {mapMutations} from 'vuex';

  const SCROLL_TOP = 100;

  export default {
    data() {
      return {
        adPic: '',
        scrollTops: '',
        pics: [],
        goods: [],
        recommandTitle: '人气推荐',
        desc: '明星商品 为您精选',
        loading: true,
        bottom50: false,
        scrollY: 0,
        carouselHeight: 0,
        carHeight: 0,
        selectedProduct: {}
      };
    },
    mounted() {
      console.log('mounted======');
    },
    created() {
      this.probeType = 3;
      this.listenScroll = true;
      this.$http.get('/api/seller').then((response) => {
        response = response.body;
        if(response.errno === ERR_OK ) {
          this.adPic = response.data.adPic;
          this.pics = response.data.pics2;
          this.goods = response.data.goods;
          console.log('bbb');
        }
      });
    },
    computed: {
      _carouselHeight() {
        this.carHeight = window.innerHeight;
        return this.carHeight + 'px';
      },
      swiperHeight() {
        return this.carHeight + 'px';
      }
    },
    methods: {
      /* 背景图片路径*/
      buildBackgroundUrl: function (url) {
        return `url(${url})`;
      },
      scroll(pos) {
        this.scrollY = pos.y;
      },
      loadImage() {
        if (!this.checkloaded) {
          this.checkloaded = true;
          this.$refs.scroll.refresh();
        }
      },
      selectProduct(product, event) {
        if(!event._constructed){
          return;
        }
        this.selectedProduct = product;
        this.$refs.product.show();
      },
      selectItem(item) {
        this.$router.push({
          path: `/home/${item.id}`
        });
        this.setProduct(item);
      },
      ...mapMutations({
        setProduct: 'SET_PRODUCT'
      })
    },
    watch: {
      scrollY(newVal) {
        let translateY = Math.abs(Math.round(newVal));
        if(translateY > SCROLL_TOP){
          this.$refs.tab.show();
          this.bottom50 = true;
        }else if(translateY < SCROLL_TOP){
          this.$refs.tab.hide();
          this.bottom50 = false;
        }
      }
    },
    components: {
      Carousel,
      Split,
      Scroll,
      RecommandBar,
      Tab,
      Product
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app-pagination
    bottom: 5px !important;
    padding-right: 10px;
    /*text-align:right;*/
    span
      width: 25px;
      height: 5px;
      background:#888;
      border-radius:0;
      margin: 0 2px !important;
  .home
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    /*height:100%;*/
    /*overflow: hidden;*/
    transition: bottom 0.5s;
    &.bottom50
      bottom: 50px;
    .homeContent
      height: 100%;
      overflow: hidden;
      .carousel
        width: 100%;
      .recommand_wrapper
        .item
          position: relative;
          width: 100%;
          /*margin-top: 15px;*/
          border-bottom: 1px solid #eee;
          background-color: #fff;
          .pic
            position: relative;
            overflow: hidden;
            img
              width: 100%;
              min-width: 110px;
              border: 0;
            .sku-tag
              position: absolute;
              top: 0;
              right: 0;
              color: #fff;
              font-size: 12px;
              height: 25px;
              line-height: 25px;
              padding: 0 10px;
              min-width: 50px;
              background-color: #ff6600;
              text-align: center;

          .info
            padding: 16px 15px 11px 15px;
            .title
              max-height: 46px;
              line-height: 22px;
              font-size: 14px;
              color: #333;
              overflow: hidden;
            .sub-title
              margin-top: 5px;
              font-size: 12px;
              height: 20px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              color: #999;
              .pre_sell
                color: #ff6600;
            .price-info
              display: block;
              width: 100%;
              .price
                float: left;
                color: #ff3300;
                /*font-family: Helvetica,sans-serif;*/
                max-width: 66px;
                height: 30px;
                line-height: 30px;
                font-size: 18px;
                overflow: visible;
              .collect
                float: right;
                max-width: 69px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                margin-left: 10px;
                color: #ccc;
                height: 30px;
                line-height: 30px;
                .icon-index
                  float: left;
                  display: inline-block;
                  width: 30px;
                  height: 20px;
                  background: url(//img.mdcdn.cn/h5/img/mall/index_sprite.png?t=1) 0 0;
                  background-size: 180px 80px;
                  &.icon-collect
                    margin-top: 3px;
                    background-position: -60px 0;
        .bottomZone
          width: 100%;
          height: 50px;
          line-height :50px;
</style>
