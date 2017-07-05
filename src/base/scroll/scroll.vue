<template>
  <div v-el:wrapper>
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';

//  const SCROLL_TOP = 100;

  export default {
    props: {
      probeType: {
        type: Number,
        default: 1
      },
      click: {
        type: Boolean,
        default: true
      },
      listenscroll: {
        type: Boolean,
        default: false
      },
      data: {
        type: Array,
        default: null
      },
      pullup: {
        type: Boolean,
        default: false
      },
      beforeScroll: {
        type: Boolean,
        default: false
      },
      refreshDelay: {
        type: Number,
        default: 20
      }
    },
    ready() {
      setTimeout(() => {
        this._initScroll();
      }, 20);
    },
    methods: {
      _initScroll() {
        if (!this.$els.wrapper) {
          return;
        }
        this.scroll = new BScroll(this.$els.wrapper, {
          probeType: this.probeType,
          click: this.click
        });
      },
      disable() {
        this.scroll && this.scroll.disable();
      },
      enable() {
        this.scroll && this.scroll.enable();
      },
      refresh() {
        console.log('zhi xing le');
        this.scroll && this.scroll.refresh();
      },
      scrollTo() {
        this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments);
      },
      scrollToElement() {
        this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments);
      }
    },
    watch: {
      data() {
        setTimeout(() => {
          this.refresh();
          console.log('zhixing refresh');
        }, this.refreshDelay);
      }
    }
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
