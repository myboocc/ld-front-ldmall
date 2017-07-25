<template>
  <div>
    <div class="shopcart" >
      <div class="content">
        <div class="content-collect">
          <span class="icon-favorite"></span>
          <span class="text">收藏</span>
        </div>
        <div class="content-cart">
          <span class="icon-shopping_cart"></span>
          <span class="text">购物车</span>
        </div>
        <div class="content-addCart" @click="toggleList">
          加入购物车
        </div>
        <div class="content-buy">
          立即购买
        </div>
      </div>
      <!--购物车详情-->
      <transition name="fold">
        <div class="shopcart-list" v-show="listShow">
          <div class="list-header">
            <h1 class="title">购物车</h1>
            <span class="empty" @click="empty">清空</span>
          </div>
          <div class="list-content" ref="listContent">
            <ul>
              <li class="product">
                <span class="name">{{selectProduct.title}}</span>
                <div class="price">
                  <span>￥{{selectProduct.price}}</span>
                </div>
                <div class="cartcontrol-wrapper">
                  <cart-control :product="selectProduct"></cart-control>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
    <transition name="fade">
      <div class="list-mask" @click="hideList" v-show="listShow"></div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import CartControl from 'components/cartcontrol/cartcontrol';

  export default {
    props: {
      selectProduct: {
        type: Object,
        default() {
          return [
            {
              price: 10,
              count: 1
            }
          ];
        }
      },
      deliveryPrice: {
        type: Number,
        default: 0
      },
      minPrice: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        balls: [
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          }
        ],
        dropBalls: [],
        fold: true
      };
    },
    computed: {
      totalPrice() {
        let total = 0;
//        this.selectFoods.forEach((food) => {
//          total += food.price * food.count;
//        });
        return total;
      },
      totalCount() {
        let count = 0;
//        this.selectFoods.forEach((food) => {
//          count += food.count;
//        });
        return count;
      },
      payDesc() {
        if(this.totalPrice === 0){
          return `￥${this.minPrice}元起送`;
        }else if(this.totalPrice < this.minPrice){
          let diff = this.minPrice - this.totalPrice;
          return `还差￥${diff}元起送`;
        }else{
          return '去结算';
        }
      },
      payClass() {
        if(this.totalPrice < this.minPrice){
          return 'not-enough';
        }else{
          return 'enough';
        }
      },
      listShow() {
//        if(!this.totalCount){
//          this.fold = true;
//          return false;
//        }
        let show = !this.fold;
        if(show){
//          this.$nextTick(() => {
//            if(!this.scroll){
//              this.scroll = new BScroll(this.$els.listContent, {
//                click: true
//              });
//            }else{
//              this.scroll.refresh();
//            }
//          });
        }
        return show;
      }
    },
    methods: {
      drop(el) {
        for(let i = 0; i < this.balls.length; i++){
          let ball = this.balls[i];
          if(!ball.show){
            ball.show = true;
            ball.el = el;
            this.dropBalls.push(ball);
            return;
          }
        }
      },
      toggleList() {
//        if(!this.totalCount) {
//          console.log('jin ru le ' + this.totalCount);
//          return;
//        }
        console.log('meiyou jinru');
        this.fold = !this.fold;
      },
      empty() {
//        this.selectFoods.forEach((food) => {
//          food.count = 0;
//        });
      },
      hideList() {
        this.fold = true;
      },
      pay() {
        if(this.totalPrice < this.minPrice){
          return;
        }
        window.alert(`支付${this.totalPrice}元`);
//          window.alert('支付' + this.totalPrice + '元');
      }
    },
    transitions: {
      drop: {
        beforeEnter(el) {
          let count = this.balls.length;
          while(count--){
            let ball = this.balls[count];
            if(ball.show){
              let rect = ball.el.getBoundingClientRect();
              console.log(rect);
              let x = rect.left - 32;
              let y = -(window.innerHeight - rect.top - 22);
              el.style.display = '';
              el.style.webkitTransform = `translate3D(0,${y}px,0)`;
              el.style.transform = `translate3D(0,${y}px,0)`;
              let inner = el.getElementsByClassName('inner-hook')[0];
              inner.style.webkitTransform = `translate3D(${x}px,0,0)`;
              inner.style.transform = `translate3D(${x}px,0,0)`;
            }
          }
        },
        enter(el) {
          /* eslint-disable no-unused-vars */
          let rf = el.offsetHeight;
          this.$nextTick(() => {
            el.style.webkitTransform = 'translate3D(0,0,0)';
            el.style.transform = 'translate3D(0,0,0)';
            let inner = el.getElementsByClassName('inner-hook')[0];
            inner.style.webkitTransform = 'translate3D(0,0,0)';
            inner.style.transform = 'translate3D(0,0,0)';
          });
        },
        afterEnter(el) {
          let ball = this.dropBalls.shift();
          if(ball){
            ball.show = false;
            el.style.display = 'none';
          }
        }
      }
    },
    components: {
      CartControl
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl";

  .shopcart
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 300;
    width: 100%;
    height: 50px;
    border-top: 1px solid #f4f4f4;
    background: #fff;
    .content
      display: flex;
      font-size :0;
      color: rgba(255, 255, 255, 0.4);
      text-align: center;
      .content-collect,.content-cart
        flex: 0 0 50px;
        width: 50px;
        background: #fff;
        .icon-favorite,.icon-shopping_cart
          display: block;
          color: #d4d6d9;
          line-height: 35px;
          font-size: 24px;
        .text
          line-height: 10px;
          font-size: 10px;
          color: #07111b;
      .content-collect
        border-right: 1px solid #f4f4f4;
      .content-addCart,.content-buy
        flex: 1;
        height: 50px;
        font-size :14px;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
      .content-addCart
        background: #0092d8;
      .content-buy
        background: #f60;
    .ball-container
      .ball
        position: fixed;
        left:32px;
        bottom:22px;
        z-index : 200;
        &.drop-transition
          transition: all 0.4s cubic-bezier(0.49,-0.29,0.75,0.41);
          .inner
            width: 16px;
            height:16px;
            border-radius: 50%;
            background: rgb(0, 160, 220);
            transition: all 0.4s linear;
    .shopcart-list
      position: absolute;
      top:0;
      left:0;
      z-index:-1;
      width: 100%;
      transform : translate3d(0, -100%, 0);
      &.fold-enter-active,&.fold-leave-active
        transition: all 0.5s ease;
      &.fold-enter, &.fold-leave-to
        transform : translate3d(0, 0, 0);
      .list-header
        height:40px;
        line-height :40px;
        padding: 0 18px;
        background: #f3f5f7;
        border-bottom :2px solid rgba(7,17,27,0.1);
        .title
          float: left;
          font-size :14px;
          color: rgb(7, 17, 27);
        .empty
          float: right;
          font-size :12px;
          color: rgb(0, 160, 220);
      .list-content
        padding: 0 18px;
        max-height: 217px;
        background: #fff;
        overflow: hidden;
        .product
          position: relative;
          padding:12px 0;
          box-sizing :border-box;
          border-1px(rgba(7,17,27,0.1));
          .name
            line-height :24px;
            font-size :14px;
            color: rgb(7, 17, 27);
          .price
            position: absolute;
            right: 90px;
            bottom:12px;
            line-height:24px;
            font-size :14px;
            font-weight :700;
            color: rgb(240, 20, 20);
          .cartcontrol-wrapper
            position: absolute;
            right:0;
            bottom:6px;
  .list-mask
    position: fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index: 290;
    backdrop-filter:blur(10px);
    opacity:1;
    background: rgba(7, 17, 27, 0.6);
    &.fade-enter-active,&.fade-leave-active
      transition: all 0.5s;
    &.fade-enter, &.fade-leave-to
      opacity:0;
      background: rgba(7, 17, 27, 0);
</style>
