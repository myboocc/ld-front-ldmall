<template>
  <div class="swiper-container appSwiper">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <div class="swiper-pagination" :class="classpage"  v-if="showpage"></div>
  </div>
</template>

<script type="text/ecmascript-6">
    import Swiper from 'swiper';

    export default {
      mounted() {
        let _this = this;
//        if (_this.list && _this.list.length > 0) {
        if (!(_this.list && _this.list.length === 0)) {
          _this.renderSwiper();
        }
      },
      methods: {
        /* 渲染swiper组件 */
        renderSwiper() {
          let _this = this;
          _this.swiper = new Swiper(_this.$el, {
            direction: _this.direction,
            autoplay: _this.autoplay,
            speed: _this.speed,
            loop: _this.loop,
            autoplayDisableOnInteraction: _this.autoplayDisableOnInteraction,
            pagination: '.swiper-pagination',
            paginationClickable: true
          });
        }
      },
      props: {
        isDetail: {
          type: Boolean,
          default: false
        },
        list: {
          type: Array,
          required: false
        },
        direction: {
          type: String,
          default: 'horizontal'
        },
        autoplay: {
          type: Number,
          default: 3000
        },
        speed: {
          type: Number,
          default: 600
        },
        loop: {
          type: Boolean,
          default: true
        },
        autoplayDisableOnInteraction: {
          type: Boolean,
          default: false
        },
        showpage: {
          type: Boolean,
          default: true
        },
        height: {
          type: Number,
          default: window.innerHeight
        },
        classpage: String
      },
      watch: {
        list() {
          this.$nextTick(() => {
            this.renderSwiper();
            console.log('render Swiper');
          });
        }
      }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .appSwiper
    width:100%;
    .swiper-slide
      text-align: center;
      background: #fff;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
      background: center no-repeat;
      background-size: cover;
      a
        display: block;
        img
          width: 100%;
</style>
