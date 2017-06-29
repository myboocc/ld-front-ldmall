<template>
  <div class="seriesWrapper">
    <div class="title">香氛蜡烛系列</div>
    <div class="goodsWrapper">
      <div class="goodsItem">
        <div class="item">
          <div class="goodsPic">
            <img src="../../assets/product.png" width="100%" height="auto">
          </div>
          <div class="goodsInfo">
            <p class="goodsTitle">H.S MAKE 佛手柑精油蜡烛 LUXURY CANDLE BERGAMOT ESSENTIAL OIL</p>
            <p class="price"><em>￥228.00</em></p>
            <span class="icon icon-shopping_cart"></span>
          </div>
        </div>
      </div>
      <div class="goodsItem">
        <div class="item">
          <div class="goodsPic">
            <img src="../../assets/product.png" width="100%" height="auto">
          </div>
          <div class="goodsInfo">
            <p class="goodsTitle">H.S MAKE 佛手柑精油蜡烛 LUXURY CANDLE BERGAMOT ESSENTIAL OIL</p>
            <p class="price"><em>￥228.00</em></p>
            <span class="icon icon-shopping_cart"></span>
          </div>
        </div>
      </div>
      <div class="goodsItem">
        <div class="item">
          <div class="goodsPic">
            <img src="../../assets/product.png" width="100%" height="auto">
          </div>
          <div class="goodsInfo">
            <p class="goodsTitle">H.S MAKE 佛手柑精油蜡烛 LUXURY CANDLE BERGAMOT ESSENTIAL OIL</p>
            <p class="price"><em>￥228.00</em></p>
            <span class="icon icon-shopping_cart"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .seriesWrapper
    background: #f8f8f8;
    .title
      padding: 10px;
      border-bottom :1px solid #e5e5e5;
      font-size :18px;
      box-sizing :border-box;
    .goodsWrapper
      display: flex;
      flex-wrap: wrap;
      padding: 5px;
      margin: 10px 0;
      .goodsItem
        width: 50%;
        box-sizing :border-box;
        margin: 5px 0;
        .item
          margin: 0 4px;
          border: 2px solid #f8f8f8;
          background:#fff;
          .goodsPic
            img
              border: none;
          .goodsInfo
            position: relative;
            font-size :0;
            .goodsTitle
              display:-webkit-box;
              height: 32px;
              overflow :hidden;
              -webkit-box-orient:vertical;
              -webkit-line-clamp:2;
              text-overflow:ellipsis;
              font-size: 12px;
              line-height :1.3;
              padding-left :4px;
            .price
              margin: 5px 10px 10px 0;
              font-weight: 700;
              font-style: normal;
              color: #f60;
              font-size :14px;
            .icon-shopping_cart
              position: absolute;
              right: 10px;
              bottom: 0;
              font-size :16px;
              color: #b4adad;
</style>
