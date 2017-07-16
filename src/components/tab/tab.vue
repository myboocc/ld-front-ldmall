<template>
  <transition name="fade">
    <div class="tab border-1px" v-show="isShowTab">
      <div class="tab-bar">
        <router-link tag="div" to="/home" class="homeNav">
          <span class="icon-home"></span>
        </router-link>
        <div class="navList">
          <div @click.stop.prevent="toggleProductNav">
            <span class="icon icon-shopping_cart"></span>
            <span class="text">产品种类</span>
          </div>
          <transition name="slide">
            <ul class="subNavWrapper" v-show="isShowProductSubNav">
              <li v-for="item in productSeries" class="navItem">
                <a>{{item}}</a>
              </li>
            </ul>
          </transition>
        </div>
        <div class="navList">
          <div @click.stop.prevent="toggleMyNav">
            <span class="icon icon-user"></span>
            <span class="text">我的LD</span>
          </div>
          <transition name="slide">
            <ul class="subNavWrapper" v-show="isShowMySubNav">
              <li v-for="item in myNavs" class="navItem">
                <a>{{item}}</a>
              </li>
            </ul>
          </transition>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        productSeries: ['家居护理', '精油香氛', '精美蜡烛', '个人护理'],
        myNavs: ['购物车', '我的订单', '举手发问'],
        isShowProductSubNav: false,
        isShowMySubNav: false,
        isShowTab: false
      };
    },
    methods: {
      toggleProductNav() {
        this.isShowProductSubNav = !this.isShowProductSubNav;
        this.isShowMySubNav = this.isShowMySubNav === true ? !this.isShowMySubNav : this.isShowMySubNav;
      },
      toggleMyNav() {
        this.isShowMySubNav = !this.isShowMySubNav;
        this.isShowProductSubNav = this.isShowProductSubNav === true ? !this.isShowProductSubNav : this.isShowProductSubNav;
      },
      show() {
        if(!this.isShowTab){
          console.log('show le ');
          this.isShowTab = true;
        }
      },
      hide() {
        if(this.isShowTab){
          console.log('hide le ');
          this.isShowTab = false;
        }
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tab
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 200;
    width: 100%;
    height: 50px;
    background: rgb(250,250,250);
    border-top: 1px solid rgba(7,17,27,0.1);
    &.fade-enter-active, &.fade-leave-active
      transition: bottom 0.5s;
    &.fade-enter, &.fade-leave-to
      bottom: -100%;
    .tab-bar
      width: 100%;
      height: 100%;
      display: flex;
      text-align: center;
      /*padding-top: 4px;*/
      .homeNav
        flex: 0 0 45px;
        width: 45px;
        line-height: 50px;
        font-size: 18px;
        color: #848484;
        border-right: 1px solid #e5e5e5;
      .navList
        position: relative;
        flex: 1;
        line-height: 50px;
        border-right: 1px solid #e5e5e5;
        &:last-child
          border-right: none;
        .icon
          color: #848484;
        .subNavWrapper
          position: absolute;
          bottom: 65px;
          left: 0;
          width: 100%;
          background: #fafafa;
          border: 1px solid #ccc;
          border-radius: 5px;
          line-height: 43px;
          z-index: 100;
          opacity: 1;
          /*动画效果*/
          &.slide-enter-active, &.slide-leave-active
            transition: all 0.3s;
          &.slide-enter, &.slide-leave-to
            bottom: 60%;
            opacity: 0;
          .navItem
            padding: 0 8px;
            line-height: 43px;
            text-align: center;
            border-bottom: 1px solid #e5e5e5;
            font-size: 12px;
            &:last-child
              border-bottom: none;
            &:last-child:after
              content: '';
              position: absolute;
              height: 0;
              width: 0;
              left: 50%;
              transform: translateX(-50%);
              bottom:-9px;
              border: 10px solid transparent;
              border-bottom: 0;
              border-top-color: #fafafa;
              z-index: -1;
</style>
