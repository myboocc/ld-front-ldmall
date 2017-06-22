<template>
  <div>
    <!-- 搜索区域 -->


    <router-view keep-alive></router-view>

    <div class="tab border-1px">
      <div class="tab-bar">
        <div v-link="{path:'/home'}" class="homeNav">
          <span class="icon-home"></span>
        </div>
        <div class="navList">
          <span class="icon icon-shopping_cart"></span>
          <span class="text">产品种类</span>
          <ul class="subNavWrapper">
            <li v-for="item in productSeries" class="navItem">
              <a href="{{item.href}}">{{item.text}}</a>
            </li>
          </ul>
        </div>
        <div class="navList">
          <span class="icon icon-user"></span>
          <span class="text">我的LD</span>
          <ul class="subNavWrapper">
            <li v-for="item in myNavs" class="navItem">
              <a href="{{item.href}}">{{item.text}}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        productSeries: ['家居护理', '精油香氛', '精美蜡烛', '个人护理'],
        myNavs: ['购物车', '我的订单', '举手发问']
      };
    }
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

.tab{
  position: fixed;
  left: 0;
  /*bottom: -100%;*/
  bottom: 0;
  z-index: 200;
	width: 100%;
	height: 50px;
  background: rgb(250,250,250);
  border-top: 1px solid rgba(7,17,27,0.1);
  transition: all 0.5s;
}
.tab .tab-bar{
  width: 100%;
  height: 100%;
  display: flex;
	text-align: center;
  /*padding-top: 4px;*/
}
.tab .tab-bar .homeNav{
  flex: 0 0 45px;
  width: 45px;
  line-height: 50px;
  font-size: 18px;
  color: #848484;
  border-right: 1px solid #e5e5e5;
}
.tab .tab-bar .navList{
  flex: 1;
  line-height: 50px;
  border-right: 1px solid #e5e5e5;
}
.tab .tab-bar .navList:last-child{
  border-right: none;
}
.tab .tab-bar .navList .icon{
  color: #848484;
}
.tab .tab-bar .navList .subNavWrapper{

}

/*#app .tab .tab-bar > a{*/
  /*flex: 1;*/
  /*display: block;*/
  /*box-sizing: border-box;*/
  /*font-size: 0;*/
/*}*/
/*#app .tab .tab-bar > a .icon-home,*/
/*#app .tab .tab-bar > a .icon-shopping_cart,*/
/*#app .tab .tab-bar > a .icon-user{*/
  /*display: block;*/
  /*color: #888;*/
  /*margin-bottom: 5px;*/
  /*font-size :22px;*/
/*}*/
/*#app .tab .tab-bar > a.active .icon-home,*/
/*#app .tab .tab-bar > a.active .icon-shopping_cart,*/
/*#app .tab .tab-bar > a.active .icon-user{*/
  /*color: #ff0000;*/
/*}*/

/*#app .tab .tab-bar > a .text{*/
  /*font-size :12px;*/
  /*color: rgb(7, 17, 27);*/
/*}*/
/*#app .tab .tab-bar > a.active .text{*/
  /*color: #ff0000;*/
/*}*/

</style>
