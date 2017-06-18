<template>
  <!-- 轮播广告 -->
  <v-carousel id="swiperView" classpage="app-pagination" :list="pics" v-if="!loading"></v-carousel>
  <split></split>

  <recommand-bar :title="recommandTitle" :iconName=""></recommand-bar>

  <!-- Loading -->
  <Loading :show="loading"></Loading>

</template>

<script type="text/ecmascript-6">
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
</style>
