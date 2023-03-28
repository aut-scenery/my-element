<template>
  <div class="home">
    <my-table :tableTitle="tableTitle" :tableData="tableData"></my-table>
    <my-pagination :pages="pages"></my-pagination>
  </div>
</template>

<script>
import userData from '@/assets/userData.json'
export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      // 表格数据
      tableData: [],
      // 表格表头
      tableTitle:
        {
          selection: true,
          stripe: true,
          size: 'mini',
          handleSelectionChange: this.handleSelectionChange,
          head: [{
            label: '用户名',
            prop: 'username',
            width: '80',
            align: 'left'
          },
          {
            label: '昵称',
            prop: 'nickName',
            style: {
              color: 'red'
            }
          },
          {
            label: '性别',
            prop: 'gender'
          },
          {
            label: '电话',
            prop: 'phone',
            overflow: true,
            width: 110
          },
          {
            label: '邮箱',
            prop: 'email',
            overflow: true,
            width: 150
          },
          {
            label: '部门',
            prop: 'dept',
            filter: (row) => {
              return row.dept.name
            }
          },
          {
            label: '状态',
            prop: 'enabled',
            type: 'switch',
            onChange: (e, row) => {
              console.log(e)
              console.log(row)
              console.log(123)
            }
          },
          {
            label: '创建时间',
            prop: 'createTime',
            width: 150
          },
          {
            label: '操作',
            type: 'btn',
            width: '180',
            fixed: 'right',
            btn: [
              {
                type: 'primary',
                icon: 'el-icon-edit',
                handlerClick: this.editClick
              },
              {
                type: 'danger',
                icon: 'el-icon-delete',
                handlerClick: this.deleteClick
              }
            ]

          }]
        },
      // 分页数据
      pages: {
        page: 1,
        size: 10,
        prevText: '上一页',
        nextText: '下一页',
        background: true,
        pageSizes: [10, 20, 30, 40],
        layout: 'total, prev, pager, next, sizes',
        total: 0,
        handleSizeChange: this.handleSizeChange,
        handleCurrentChange: this.handleCurrentChange
      }
    }
  },
  mounted () {
    this.tableData = userData.content
    this.pages.total = userData.totalElements
  },
  methods: {
    handleSelectionChange (val) {
      console.log(val)
    },
    editClick (row) {
      console.log('点击了按钮1')
      console.log(row)
    },
    deleteClick (row) {
      console.log('点击了按钮2')
      console.log(row)
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>
