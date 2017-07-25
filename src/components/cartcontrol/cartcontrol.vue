<template>
  <div class="cartcontrol">
    <div class="cart-decrease" @click.stop.prevent="decreaseCart" v-show="product.count > 0" transition="move">
      <span class="inner icon-remove_circle_outline"></span>
    </div>
    <div class="cart-count" v-show="product.count > 0">{{product.count}}</div>
    <div class="cart-add icon-add_circle" @click.stop.prevent="addCart"></div>
  </div>
</template>

<script type="text/ecmascript-6">
    import Vue from 'vue';

    export default {
      props: {
        product: {
          type: Object
        }
      },
      methods: {
        addCart(event) {
          if(!event._constructed){
            return;
          }
          if(!this.product.count){
            Vue.set(this.product, 'count', 1);
          }else{
            this.product.count++;
          }
          this.$emit('cart.add', event.target);
        },
        decreaseCart(event) {
          if(!event._constructed){
            return;
          }
          if(this.product.count){
            this.product.count--;
          }
        }
      }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cartcontrol
    font-size :0;
    .cart-decrease
      display: inline-block;
      padding: 6px;
      transition: all 0.4s linear;
      &.move-transition
        opacity:1;
        transform : translate3D(0,0,0);
        .inner
          display: inline-block;
          font-size: 24px;
          line-height:24px;
          color: rgb(0, 160, 220);
          transition: all 0.4s linear;
          transform: rotate(0);
      &.move-enter, &.move-leave
        opacity:0;
        transform : translate3D(24px,0,0);
        .inner
          transform: rotate(180deg);
    .cart-count
      display: inline-block;
      vertical-align :top;
      width:12px;
      padding-top :6px;
      line-height :24px;
      text-align :center;
      font-size :10px;
      color: rgb(147, 153, 159);
    .cart-add
      display: inline-block;
      padding: 6px;
      font-size: 24px;
      line-height:24px;
      color: rgb(0, 160, 220);
</style>
