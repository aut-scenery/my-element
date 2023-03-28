<template>
<div class=''>
  <el-pagination
      @size-change="pages.handleSizeChange? pages.handleSizeChange($event) : ''"
      @current-change="pages.handleCurrentChange? pages.handleCurrentChange($event) : ''"
      @prev-click="pages.handlePrevClick? pages.handlePrevClick($event) : ''"
      @next-click="pages.handleNextClick? pages.handleNextClick($event) : ''"
      :current-page="pages.page? pages.page : 1"
      :small="pages.small? pages.small : false"
      :prev-text="pages.prevText? pages.prevText : ''"
      :next-text="pages.nextText? pages.nextText : ''"
      :disabled="pages.disabled? pages.disabled : false"
      :hide-on-single-page="pages.hideOnSinglePage? pages.hideOnSinglePage : false"
      :background="pages.background? pages.background : false"
      :page-sizes="pages.pageSizes? pages.pageSizes : [100, 200, 300, 400]"
      :page-size="pages.size? pages.size : 100"
      :layout="pages.layout? pages.layout : 'total, sizes, prev, pager, next, jumper'"
      :total="pages.total? pages.total : 400">
    </el-pagination>
</div>
</template>

<script>
export default {
  name: 'myPagination',
  props: {
    pages: {
      type: Object,
      required: true
    }
  },
  components: {},
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
