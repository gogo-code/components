<template>
  <div class="header">
    <tree-menu>
      <template v-for="(item, index) in menuData">
        <menu-item v-if="!item.children" :key="item.id">
          {{ item.title }}
        </menu-item>
        <!-- <sub-menu v-else :key="item.id">
          <template #title>
            {{ item.title }}
          </template>
          <template v-for="(c, index) in item.children">
            <menu-item :key="c.id">{{c.title}}</menu-item>
          </template>
        </sub-menu> -->
        <re-sub-menu v-else :key="item.id" :data="item">
          
        </re-sub-menu>
      </template>
    </tree-menu>
  </div>
</template>

<script>
import TreeMenu from './TreeMenu';
import MenuItem from './TreeMenu/MenuItem';
import SubMenu from './TreeMenu/SubMenu';
// import ReSubMenu from './TreeMenu/ReSubMenu';
import menuData from './TreeMenu/menu';

export default {
  data() {
    return {
      menuData,
    };
  },
  components: {
    TreeMenu,
    MenuItem,
    SubMenu,
    // ReSubMenu
  },

};
</script>

<style lang="scss" scoped>
.header {
  height: 60px;
  width: 300px;
  
  
}
</style>
