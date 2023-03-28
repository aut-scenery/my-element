type pages = {
  // 事件 events
  handleSizeChange: (event: number) => void // 每页条数 改变时会触发
  handleCurrentChange: (event: number) => void // 页数改变时触发
  handlePrevClick: (event: number) => void  // 点击上一页时触发
  handleNextClick: (event: number) => void // 点击下一页时触发
  page: number // 当前页数      默认为 1
  small: boolean // 是否使用小型分页样式    默认为 false
  disabled: boolean // 是否禁用      默认为 false
  prevText: string // 替代图标显示的上一页文字
  nextText: string // 替代图标显示的下一页文字
  hideOnSinglePage: boolean // 只有一页时是否隐藏    默认为 false
  background: boolean // 是否使用背景色 默认为 false
  pageSizes: number[] // 每页显示个数选择器的选项设置  默认 [100, 200, 300, 400]
  size: number // 每页显示条数 默认 100
  layout: string  // 组件布局，子组件名用逗号分隔
  total: number // 总条数数
}