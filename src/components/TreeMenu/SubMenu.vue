<template>
<div class="sub-menu"
@mouseenter="show"
@mouseleave="hide">
  <div class="title">
    <slot name="title"></slot>
    <span class="icon">&gt;</span>
  </div>
  <div class="sub-item" v-show="subShow">
    <slot></slot>
  </div>
</div>
</template>

<script>
export default {
  data(){
    return {
      subShow:false

    }
  },
  methods:{
    show(){
      this.subShow=true
    },
    hide(){
      this.subShow=false
    }
  }

}
</script>

<style lang="scss" scoped>
.sub-menu{
  position:relative;
  height: 50px;
  line-height: 50px;
  text-align: center;
  .title{
    position:relative;
    .icon{
      position: absolute;
      top: 0;
      right: 15px;
    }
  }
  .sub-item{
    position: absolute;
    left: 100%;
    top:0;
    width: 100%;
    background-color: #000;
    color: #fff;
  }
}
</style>