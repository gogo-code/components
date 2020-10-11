<template>
<div class="menu-item">
  <slot></slot>
</div>
</template>

<script>
export default {
  data(){
    return {

    }
  },

}
</script>

<style lang="scss" scoped>
  .menu-item{
    height: 60px;
    text-align: center;
    line-height: 60px;
  }
</style>