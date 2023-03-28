// webpackContext(req) keys 得到所有的 .vue
// webpackContext(req) 得到完整的组件
const files = require.context('.', true, /\.vue$/)
const arr = []
files.keys().forEach(item => {
  arr.push(files(item).default)
})
const install = (Vue) => {
  arr.forEach(item => {
    Vue.component(item.name, item)
  })
  // console.log(bdTable)
  // Vue.component(bdTable.name, bdTable)
}
export default install
