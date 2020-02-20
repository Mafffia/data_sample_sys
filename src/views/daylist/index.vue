<template>
  <div class="app-container">
    <daychart></daychart>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column class-name="status-col" label="Month" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.date">{{ scope.row.date }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column width="115"  label="政治">
        <template slot-scope="scope">
          {{ scope.row.politic }}
        </template>
      </el-table-column>
      <el-table-column label="军事" width="115" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.military }}</span>
        </template>
      </el-table-column>
      <el-table-column label="经济" width="115" align="center">
        <template slot-scope="scope">
          {{ scope.row.economic }}
        </template>
      </el-table-column>
      <el-table-column label="体育" width="115" align="center">
        <template slot-scope="scope">
          {{ scope.row.sports }}
        </template>
      </el-table-column>
      <el-table-column label="社会" width="115" align="center">
        <template slot-scope="scope">
          {{ scope.row.socity }}
        </template>
      </el-table-column>
      <el-table-column label="娱乐" width="115" align="center">
        <template slot-scope="scope">
          {{ scope.row.entertain }}
        </template>
      </el-table-column>
      <el-table-column label="其他" width="115" align="center">
        <template slot-scope="scope">
          {{ scope.row.others }}
        </template>
      </el-table-column>
        <el-table-column label="总量"  align="center">
        <template slot-scope="scope">
          {{ scope.row.sum }}
        </template>
      </el-table-column>
      
    </el-table>
    
    
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
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getDayChartdata().then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    }
  }
}
</script>
