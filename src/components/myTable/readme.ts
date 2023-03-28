// 表格数据
type tableData = any[]
// 表头
type tableTitle = {
  selection: boolean  // 是否使用多选
  stripe: boolean // 是否使用斑马纹
  size: string // 表格的尺寸
  handleSelectionChange: (event: any[]) => void // 当选择项发生改变是触发
  head: head[] // 表头数据
}
interface head {
  label: string // 显示的标题
  prop: string // 对应列内容的字段名
  width: string // 对应列的宽度
  align: string // 对应列的对齐方式 默认为 'center'
  style: object // 对应列的样式
  overflow: boolean // 当内容过长被隐藏时显示 tooltip 默认为 false
  filter: (row: any) => void  // 过滤函数
  type: string // 当前列的类型  'switch'|| 'btn'
  fixed: string // 列是否固定在左侧或右侧  'left' || 'right'
}