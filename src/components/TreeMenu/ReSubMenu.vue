<template>
  <sub-menu>
    <template #title>
      {{ data.title }}
    </template>
    <template v-for="(c, index) in data.children">
      <menu-item :key="c.id" v-if="!c.children">{{ c.title }}</menu-item>
      <re-sub-menu v-else :key="c.id" :data="c"></re-sub-menu>
    </template>
  </sub-menu>
</template>

<script>
import SubMenu from './SubMenu';
import MenuItem from './MenuItem';
// import ReSubMenu from './ReSubMenu';
export default {
  props: {
    data: Object,
  },
  data() {
    return {
      subShow: false,
    };
  },
  components: {
    SubMenu,
    MenuItem,
    // ReSubMenu
    
  },
 
};
</script>

<style lang="scss" scoped></style>
