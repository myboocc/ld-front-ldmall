<template>
  <div class="home" :class="{'bottom50':bottom50}" v-el:home-wrapper>
    <div class="homeContent">
      <!-- 轮播广告 -->
      <div class="carousel" :style="{height: _carouselHeight}">
        <v-carousel id="swiperView" classpage="app-pagination" :list="pics"></v-carousel>
      </div>
      <!--<div style="width: 100%;height: 660px;"></div>-->

      <recommand-bar :title="recommandTitle" :iconName="" :desc="desc"></recommand-bar>
      <!--<split></split>-->
      <!-- 产品列表 -->
      <div class="recommand_wrapper">
        <ul class="item-list">
          <li class="item">
            <div class="pic">
              <img src="https://img.alicdn.com/imgextra/i2/1078291725/TB2eSGLybBnpuFjSZFGXXX51pXa_!!1078291725.jpg">
              <div class="sku-tag sku_tag_important">520美粉节</div>
            </div>
            <div class="info">
              <div class="title">双温除菌，美的生活从洁净开始</div>
              <div class="sub-title">
                <span class="pre_sell">[预售]</span> 洗衣机MG90V130WDX
              </div>
              <div class="price-info clearfix">
                <div class="price">
                  ¥&nbsp;<em>2498.00</em>
                </div>
                <div class="collect">
                  <i class="icon-index icon-collect"></i>
                  <span class="collect-count">109</span>
                </div>
              </div>
            </div>
          </li>
          <split></split>
          <li class="item">
            <div class="pic">
              <img src="https://img.alicdn.com/imgextra/i2/1078291725/TB2eSGLybBnpuFjSZFGXXX51pXa_!!1078291725.jpg">
              <div class="sku-tag sku_tag_important">520美粉节</div>
            </div>
            <div class="info">
              <div class="title">双温除菌，美的生活从洁净开始</div>
              <div class="sub-title">
                <span class="pre_sell">[预售]</span> 洗衣机MG90V130WDX
              </div>
              <div class="price-info clearfix">
                <div class="price">
                  ¥&nbsp;<em>2498.00</em>
                </div>
                <div class="collect">
                  <i class="icon-index icon-collect"></i>
                  <span class="collect-count">109</span>
                </div>
              </div>
            </div>
          </li>
          <split></split>
          <li class="item">
            <div class="pic">
              <img src="https://img.alicdn.com/imgextra/i2/1078291725/TB2eSGLybBnpuFjSZFGXXX51pXa_!!1078291725.jpg">
              <div class="sku-tag sku_tag_important">520美粉节</div>
            </div>
            <div class="info">
              <div class="title">双温除菌，美的生活从洁净开始</div>
              <div class="sub-title">
                <span class="pre_sell">[预售]</span> 洗衣机MG90V130WDX
              </div>
              <div class="price-info clearfix">
                <div class="price">
                  ¥&nbsp;<em>2498.00</em>
                </div>
                <div class="collect">
                  <i class="icon-index icon-collect"></i>
                  <span class="collect-count">109</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div class="bottomZone"></div>
      </div>

    </div>
  </div>
  <!-- Loading -->
  <!--<Loading :show="loading"></Loading>-->

</template>

<script type="text/ecmascript-6">
    import BScroll from 'better-scroll';
    import split from 'components/split/split';
//    import Loading from 'components/loading/Loading';
    import carousel from 'components/swiper/carousel';
    import recommandBar from 'components/recommandBar/recommandBar';

    const ERR_OK = 0;
    const SCROLL_TOP = 100;

    export default {
      data() {
        return {
          pics: [],
          recommandTitle: '人气推荐',
          desc: '明星商品 为您精选',
          loading: true,
          bottom50: false,
          scrollY: 0,
          carouselHeight: 0,
          carHeight: 0
        };
      },
      ready() {
        console.log('aaa');
        this._initScroll();
        this.scroll.on('scroll', (pos) => {
          this.scrollY = Math.abs(Math.round(pos.y));
//          console.log(this.scrollY);
          if(this.scrollY > SCROLL_TOP){
            this.$dispatch('show.tab', true);
            this.bottom50 = true;
          }else if(this.scrollY < SCROLL_TOP){
            this.$dispatch('show.tab', false);
            this.bottom50 = false;
          }
        });
        let self = this;
        setTimeout(function () {
          self._initScroll();
        }, 300);
      },
      created() {
        this.$http.get('/api/seller').then((response) => {
          response = response.body;
          if(response.errno === ERR_OK ){
            this.pics = response.data.pics2;
//            this.loading = false;
            console.log('bbb');
            this.$nextTick(() => {
//              this.scroll = new BScroll(this.$els.homeWrapper, {
//                probeType: 3,
//                click: true
//              });
              console.log('ccc++');
            });
          }
        });
      },
      computed: {
        _carouselHeight() {
          this.carHeight = window.innerHeight;
          return this.carHeight + 'px';
        }
      },
      methods: {
        _initScroll() {
          if(!this.scroll){
            this.scroll = new BScroll(this.$els.homeWrapper, {
              probeType: 3,
              click: true
            });
            console.log('执行创建，，，');
          }else{
            this.scroll.refresh();
            console.log('执行刷新，，，。。。');
          }
        },
        carouselHeight() {
          return this.carHeight + 'px';
        }
      },
      events: {
        'wiper.ok'(args) {
          this.$nextTick(() => {
            console.log('ccc' + args);
            this._initScroll();
          });
        }
      },
      watch: {
        'carHeight'() {
          console.log('bian le');
          console.log(this.carHeight);
          this.$nextTick(() => {
            this._initScroll();
          });
        }
      },
      components: {
        'v-carousel': carousel,
        split,
//        Loading,
        'recommand-bar': recommandBar
      }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app-pagination
    bottom: 5px !important;
    padding-right: 10px;
    text-align:right;
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
    overflow: hidden;
    transition: bottom 0.5s;
    &.bottom50
      bottom: 50px;
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
