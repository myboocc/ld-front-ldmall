<template>
  <div>
    <!-- 搜索区域 -->


    <router-view keep-alive></router-view>

    <div class="tab border-1px">
      <div class="tab-bar">
        <a v-link="{path:'/home'}">
          <span class="icon-home"></span>
          <span class="text">首页</span>
        </a>
        <a v-link="{path:'/ratingMode'}">
          <span class="icon-shopping_cart"></span>
          <span class="text">购物车</span>
        </a>
        <a v-link="{path:'/seller'}">
          <span class="icon-user"></span>
          <span class="text">我</span>
        </a>
      </div>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  };

</script>

<style type="text/css" rel="stylesheet">
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
/*}*/

#app .tab{
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 200;
	width: 100%;
	height: 50px;
  border-top: 1px solid rgba(7,17,27,0.1);
}
#app .tab .tab-bar{
  width: 100%;
  display: flex;
	text-align: center;
  padding-top: 4px;
}
#app .tab .tab-bar > a{
  flex: 1;
  display: block;
  box-sizing: border-box;
  font-size: 0;
}
#app .tab .tab-bar > a .icon-home,
#app .tab .tab-bar > a .icon-shopping_cart,
#app .tab .tab-bar > a .icon-user{
  display: block;
  color: #888;
  margin-bottom: 5px;
  font-size :22px;
}
#app .tab .tab-bar > a.active .icon-home,
#app .tab .tab-bar > a.active .icon-shopping_cart,
#app .tab .tab-bar > a.active .icon-user{
  color: #ff0000;
}

#app .tab .tab-bar > a .text{
  font-size :12px;
  color: rgb(7, 17, 27);
}
#app .tab .tab-bar > a.active .text{
  color: #ff0000;
}

</style>
