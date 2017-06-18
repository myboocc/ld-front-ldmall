<template>
	<div class="header">
		<div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" width="64" height="64" alt="">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div v-if="seller.supports" class="support">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div class="support-count" v-if="seller.supports" @click="showDetail">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>

    <div class="bulletin-wrapper" @click="showDetail">
      <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%">
    </div>

    <div v-show="detailShow" class="detail" transition="fade">
      <div class="detail-wrapper clearfix">
        <div class="detail-main">
          <h1 class="name">{{seller.name}}</h1>
          <div class="star-wrapper">
            <star :size="48" :score="seller.score"></star>
          </div>
          <div class="title">
            <div class="line"></div>
            <div class="text">优惠信息</div>
            <div class="line"></div>
          </div>
          <ul v-if="seller.supports" class="supports">
            <li class="support-item" v-for="item in seller.supports">
              <span class="icon" :class="classMap[seller.supports[$index].type]"></span>
              <span class="text">{{seller.supports[$index].description}}</span>
            </li>
          </ul>
          <div class="title">
            <div class="line"></div>
            <div class="text">商家公告</div>
            <div class="line"></div>
          </div>
          <div class="bulletin">
            <p class="content">{{seller.bulletin}}</p>
          </div>
        </div>
      </div>
      <div class="detail-close" @click="hideDetail">
        <i class="icon-close"></i>
      </div>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import star from 'components/star/star';

	export default {
    props: {
      seller: {
        type: Object
      }
    },
    data() {
      return {
        detailShow: false
      };
    },
    methods: {
      showDetail() {
        this.detailShow = true;
      },
      hideDetail() {
        this.detailShow = false;
      }
    },
    created() {
      this.classMap = ['decrease', 'discount', 'guarantee', 'special', 'invoice'];
    },
    components: {
      star
    }
	};
</script>

<style type="text/css" rel="stylesheet">
  .header{
    position: relative;
    overflow: hidden;
    color: #fff;
    background-color: rgba(7,17,27,0.5);
  }
  .header .content-wrapper{
    position: relative;
    padding: 24px 12px 18px 24px;
    font-size: 0;
  }
  .header .content-wrapper .avatar{
    display: inline-block;
    vertical-align: top;
  }
  .header .content-wrapper .avatar img{
    border-radius: 2px;
  }
  .header .content-wrapper .content{
    display: inline-block;
    font-size: 14px;
    margin-left: 16px;
  }
  .header .content-wrapper .content .title{
    margin:2px 0 8px 0;

  }
  .header .content-wrapper .content .brand{
    display: inline-block;
    vertical-align: top;
    width: 30px;
    height: 18px;
    background-image: url("brand@2x.png");
    background-size: 30px 18px;
    background-repeat: no-repeat;
  }
  .header .content-wrapper .content .name{
    margin-left: 6px;
    font-size: 16px;
    line-height: 18px;
    font-weight: bold;

  }
  .header .content-wrapper .content .description{
    margin-bottom: 10px;
    line-height: 12px;
    font-size: 12px;
  }
  .header .content-wrapper .content .support .icon{
    display: inline-block;
    vertical-align: top;
    width: 12px;
    height: 12px;
    margin-right: 4px;
    background-size: 12px 12px;
    background-repeat: no-repeat;
  }
  .header .content-wrapper .content .support .text{
    line-height: 12px;
    font-size: 10px;
  }
  .header .content-wrapper .content .support .icon.decrease{
    background-image: url("decrease_1@2x.png");
  }
  .header .content-wrapper .content .support .icon.discount{
    background-image: url("discount_1@2x.png");
  }
  .header .content-wrapper .content .support .icon.guarantee{
    background-image: url("guarantee_1@2x.png");
  }
  .header .content-wrapper .content .support .icon.invoice{
    background-image: url("invoice_1@2x.png");
  }
  .header .content-wrapper .content .support .icon.special{
    background-image: url("special_1@2x.png");
  }

  .header .content-wrapper .support-count{
    position: absolute;
    right: 12px;
    bottom: 14px;
    padding:0 8px;
    height: 24px;
    line-height: 24px;
    border-radius: 14px;
    background-color: rgba(0, 0, 0, 0.2);
    text-align: center;
  }
  .header .content-wrapper .support-count .count{
    vertical-align: top;
    font-size: 10px;
  }
  .header .content-wrapper .support-count .icon-keyboard_arrow_right{
    margin-left: 2px;
    font-size: 10px;
    line-height: 24px;
  }

  .header .bulletin-wrapper{
    position: relative;
    height: 28px;
    line-height: 28px;
    padding: 0 22px 0 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background-color: rgba(7,17,27,0.2);
  }
  .header .bulletin-wrapper .bulletin-title{
    display: inline-block;
    vertical-align: top;
    margin-top: 8px;
    width: 22px;
    height: 12px;
    background-image: url("bulletin@2x.png");
    background-repeat: no-repeat;
    background-size: 22px 12px;
  }
  .header .bulletin-wrapper .bulletin-text{
    vertical-align: top;
    margin: 0 4px;
    font-size: 10px;
  }
  .header .bulletin-wrapper .icon-keyboard_arrow_right{
    position: absolute;
    font-size: 10px;
    right: 12px;
    top: 10px;
  }

  .header .background{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: blur(10px);
  }

  .header .detail{
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 100;
    top:0;
    left:0;
    overflow: auto;
    transition: all 0.5s;
    -webkit-backdrop-filter: blur(10px);
  }
  .header .detail.fade-transition{
    opacity: 1;
    background: rgba(7, 17, 27, 0.8);
  }
  .header .detail.fade-enter,.header .detail.fade-leave{
    opacity: 0;
    background: rgba(7, 17, 27, 0);
  }

  .header .detail .detail-wrapper{
    min-height: 100%;
    width: 100%;
  }
  .header .detail .detail-wrapper .detail-main{
    margin-top: 64px;
    padding-bottom: 64px;
  }
  .header .detail .detail-wrapper .detail-main .name{
    line-height: 16px;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
  }

  .header .detail .detail-wrapper .detail-main .star-wrapper{
    margin-top: 18px;
    padding: 2px 0;
    text-align: center;
  }

  .header .detail .detail-wrapper .detail-main .title{
    display: flex;
    width: 80%;
    margin: 28px auto 24px auto;

  }
  .header .detail .detail-wrapper .detail-main .line{
    flex: 1;
    position: relative;
    top: -6px;
    border-bottom: 1px solid rgba(255,255,255,0.2);
  }
  .header .detail .detail-wrapper .detail-main .text{
    padding: 0 12px;
    font-weight: 700;
    font-size: 14px;
  }

  .header .detail .detail-wrapper .detail-main .supports{
    width:80%;
    margin: 0 auto;
  }
  .header .detail .detail-wrapper .detail-main .supports .support-item{
    padding: 0 12px;
    margin-bottom: 12px;
    font-size: 0;
  }
  .header .detail .detail-wrapper .detail-main .supports .support-item:last-child{
    margin-bottom: 0;
  }
  .header .detail .detail-wrapper .detail-main .supports .support-item .icon{
    display: inline-block;
    width: 16px;
    height: 16px;
    vertical-align: top;
    margin-right: 6px;
    background-size: 16px 16px;
    background-repeat: no-repeat;
  }
  .header .content-wrapper .content .support .text{
    line-height: 12px;
    font-size: 10px;
  }
  .header .detail .detail-wrapper .detail-main .supports .support-item .icon.decrease{
    background-image: url("decrease_2@2x.png");
  }
  .header .detail .detail-wrapper .detail-main .supports .support-item .icon.discount{
    background-image: url("discount_2@2x.png");
  }
  .header .detail .detail-wrapper .detail-main .supports .support-item .icon.guarantee{
    background-image: url("guarantee_2@2x.png");
  }
  .header .detail .detail-wrapper .detail-main .supports .support-item .icon.invoice{
    background-image: url("invoice_2@2x.png");
  }
  .header .detail .detail-wrapper .detail-main .supports .support-item .icon.special{
    background-image: url("special_2@2x.png");
  }
  .header .detail .detail-wrapper .detail-main .supports .support-item .text{
    line-height: 16px;
    font-size: 12px;
  }

  .header .detail .detail-wrapper .detail-main .bulletin{
    width: 80%;
    margin: 0 auto;
  }
  .header .detail .detail-wrapper .detail-main .bulletin .content{
    padding: 0 12px;
    line-height: 24px;
    font-size: 12px;
  }

  .header .detail .detail-close{
    position: relative;
    width: 32px;
    height: 32px;
    margin: -64px auto 0 auto;
    clear: both;
    font-size: 32px;

  }

</style>

