<template>
  <div id="app">
    <!-- <div class="header">
      <me-header></me-header>
    </div> -->
    <el-container>
       <el-header>
        <el-menu
          
          class="el-menu-demo"
          mode="horizontal"
          
        >
          <el-menu-item index="1">我的</el-menu-item>
          <el-submenu index="2">
            <template slot="title">系统设置</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">生产管理</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">统计分析</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          
        </el-menu>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <me-aside></me-aside>
        </el-aside>
        <el-main><me-main></me-main></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// import MeHeader from './components/HeaderMe';
import MeAside from './components/AsideMe';
import MeMain from './components/MainMe';
export default {
  name: 'App',
  components: {
    // MeHeader,
    MeAside,
    MeMain,
  },
  data() {
    return {};
  },
};
</script>

<style>
@import 'assets/base.css';
.header {
  height: 60px;
}
.el-header {
  height: 300px;
  /* border: 1px solid #ccc; */
}
.el-aside {
  border: 1px solid #ccc;
}
.el-main {
  border: 1px solid #ccc;
}
</style>
