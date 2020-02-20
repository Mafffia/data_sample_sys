<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
      
    >
      <el-table-column class-name="status-col" label="Date" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.date">{{ scope.row.date }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column width="400"  label="标题">
        <template slot-scope="scope">
          {{ scope.row.brief }}
        </template>
      </el-table-column>
      <el-table-column label="类型" width="115" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.type }}</span>
        </template>
      </el-table-column>
      <el-table-column label="来源站" width="115" align="center">
        <template slot-scope="scope">
          {{ scope.row.belonging }}
        </template>
      </el-table-column>
      <el-table-column label="时间" width="115" align="center">
        <template slot-scope="scope">
          {{ scope.row.time }}
        </template>
      </el-table-column>
      <el-table-column label="费用" width="80" align="center">
        <template slot-scope="scope">
          {{ scope.row.fee }}
        </template>
      </el-table-column>
      <el-table-column label="可访问" width="80" align="center">
        <template slot-scope="scope">
          {{ scope.row.accessible }}
        </template>
      </el-table-column>
      <el-table-column label="链接" width="140" align="center">
        <template slot-scope="scope">
          <a :href= "scope.row.key"  style="color:#00F">{{ scope.row.key }}</a>
        </template>
      </el-table-column>
     
    </el-table>
    <el-pagination
        :current-page="currentPage"
        :page-sizes="[5, 10, 20, 40,100]"
        :page-size="pagesize"
        :total="list.length"
        :pager-count="10"
        background
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        />
    
  </div>
  
</template>


<script>
import { getContent } from '@/api/content'
import  Daychart  from '@/components/charts/day/daychart'
import { getDayChartdata } from '@/api/chart'
export default {
  components: {
    Daychart
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
   mounted(){
  },
  data() {
    return {
      list: null,
      listLoading: true,
      currentPage: 1, //  el-pagination 初始页
      pagesize: 7, // 每页显示条数
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getContent().then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    },
     handleSizeChange: function(size) {
      this.pagesize = size
      console.log(this.pagesize) // 每页下拉显示数据
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage
      console.log(this.currentPage) // 点击第几页
    }
  }
}
</script>
