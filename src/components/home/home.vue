<template>
  <div class="home" v-el:home-wrapper>
    <!-- 轮播广告 -->
    <v-carousel id="swiperView" classpage="app-pagination" :list="pics" v-if="!loading"></v-carousel>


    <recommand-bar :title="recommandTitle" :iconName="" :desc="desc"></recommand-bar>
    <!--<split></split>-->
    <!-- 产品列表 -->
    <div class="recommand_wrapper">
      <ul class="item-list">
        <li class="item">
          <div class="pic">
            <img src="https://pic.mdcdn.cn/h5/pic/201704/de80d1378a29.jpg?x-oss-process=image/format,webp/quality,Q_90&@100Q.jpg">
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
            <img src="https://pic.mdcdn.cn/h5/pic/201704/de80d1378a29.jpg?x-oss-process=image/format,webp/quality,Q_90&@100Q.jpg">
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
    </div>

  </div>
  <!-- Loading -->
  <Loading :show="loading"></Loading>

</template>

<script type="text/ecmascript-6">
    import BScroll from 'better-scroll';
    import split from 'components/split/split';
    import Loading from 'components/loading/Loading';
    import carousel from 'components/swiper/carousel';
    import recommandBar from 'components/recommandBar/recommandBar';

    const ERR_OK = 0;

    export default {
      data() {
        return {
          pics: [],
          recommandTitle: '人气推荐',
          desc: '明星商品 为您精选',
          loading: true
        };
      },
      created() {
        this.$http.get('/api/carousel').then((response) => {
          response = response.body;
          if(response.errno === ERR_OK ){
            this.pics = response.data.pics;
            this.loading = false;
          }
        });
      },
      ready() {
        this._initScroll();
      },
      methods: {
        _initScroll() {
          if(!this.scroll){
            this.scroll = new BScroll(this.$els.homeWrapper, {
              click: true
            });
          }else{
            this.scroll.refresh();
          }
        }
      },
      components: {
        'v-carousel': carousel,
        split,
        Loading,
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
    bottom: 50px;
    width: 100%;
    overflow: hidden;
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
</style>
