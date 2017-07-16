<template>
  <div class="recommandBar">
    <span class="icon-check_circle"></span>
    <span class="text">{{title}}</span>
    <span class="desc">{{desc}}</span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      iconName: {
        type: String,
        required: false
      },
      desc: {
        type: String
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .recommandBar
    padding: 5px 18px;
    line-height :20px;
    border-bottom :1px solid rgba(7,17,27,0.1);
    color: rgb(147, 153, 159);
    font-size :0;
    .icon-check_circle
      display: inline-block;
      vertical-align :top;
      font-size :20px;
      margin-right :4px;
    .text
      font-size :12px;
      color: #000;
    .desc
      font-size: 12px;
      float: right;
</style>
