<template>
  <div>
    <div class="header">
      <h2>客户列表</h2>
      <span>添加</span>
    </div>

    <el-table :data="tableData" border style="width:99.99%">
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="province" label="省份"></el-table-column>
      <el-table-column prop="city" label="市区"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column prop="zip" label="邮编"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">
            修改
          </el-button>
          <el-button type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小一',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路',
          zip: 200333,
        },
        {
          date: '2016-05-04',
          name: '王小二',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路',
          zip: 200333,
        },
        {
          date: '2016-05-01',
          name: '王小三',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路',
          zip: 200333,
        },
        {
          date: '2016-05-03',
          name: '王小四',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路',
          zip: 200333,
        },
        
      ],
    };
  },
};
</script>

<style >
.header h2 {

  height: 30px;
  display: inline-block;
  margin: 10px 30px;
}
.header span {
  color: #409eff;
}

body .el-table th.gutter {
  display: table-cell !important;
}
.el-table {
  text-align: center;
}
.el-table td,
.el-table th {
  text-align: center !important;
}
</style>
