<template>
<div class='table w-auto'>
  <el-table
      :size="tableTitle.size"
      :data="tableData"
      :stripe="tableTitle.stripe"
      @selection-change="tableTitle.handleSelectionChange && tableTitle.handleSelectionChange"
      style="width: 100%">
      <el-table-column
      v-if="tableTitle.selection"
      type="selection"
      align="center"
      width="55">
      </el-table-column>
      <el-table-column
      v-for="(item, index) in tableTitle.head"
        :key="index"
        :prop="item.prop"
        :label="item.label"
        :width="item.width || 'auto'"
        :show-overflow-tooltip="item.overflow"
        :align="item.align || 'center'"
        :fixed="item.fixed"
        >
        <template slot-scope="scope">
          <span v-if="item.type === 'text' || !item.type" :style="item.style ? item.style : ''">
            {{ item.filter ? item.filter(scope.row) : scope.row[item.prop] }}
          </span>
          <div v-if="item.type === 'switch'">
              <el-switch
               v-model="scope.row[item.prop]"
               @change="item.onChange && item.onChange($event, scope.row)"
               active-color="#13ce66"
               inactive-color="#ff4949">
              </el-switch>
          </div>
          <div v-if="item.type === 'btn'">
            <el-button
            v-for="(btn, index) in item.btn"
            :key="index"
            :size="btn.size"
            :icon="btn.icon"
            @click="btn.handlerClick && btn.handlerClick(scope.row)"
            :type="btn.type">
            {{ btn.name }}</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
</div>
</template>

<script>
/**
 * 1.渲染数据
 * 2.表头
 * 3. 内容自定义
 *    - 按钮
 *    - 图片
 *    - input
 *    - switch
 */
export default {
  name: 'my-table',
  components: {},
  props: {
    // 渲染的数据
    tableData: {
      type: Array,
      // 默认值如果是引用数据类型要用函数
      default: () => []
    },
    // 表头
    tableTitle: {
      type: [Array, Object],
      require: true
    }
  },
  data () {
    return {
    }
  },
  computed: {},
  watch: {},
  methods: {

  },
  mounted () {

  }
}
</script>
<style lang='scss' scoped>

</style>
