export default [
  {
    id: 1,
    title: '菜单1',
  },
  {
    id: 2,
    title: '菜单1',
      children:[{
        id:321,
        title:'三级菜单'
      },
      {
        id:322,
        title:'三级菜单'
      },{
        id:323,
        title:'三级菜单'
      }]
    ,
  },
  {
    id: 3,
    title: '菜单1',
    children:[{
      id:31,
      title:'二级菜单'
      
    },
    {
      id:32,
      title:'二级菜单',
      children:[{
        id:321,
        title:'三级菜单'
      },
      {
        id:322,
        title:'三级菜单'
      },{
        id:323,
        title:'三级菜单'
      }]
    },
    {
      id:33,
      title:'二级菜单'
    }]
  },
 
];
