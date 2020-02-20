<template>
  <div class="app-container">
    <nobr>统计片段长度：
       <el-select v-model="type" clearable @change="changepage">
    <el-option  v-for="item in typeOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
 </el-select>
  区间选择：
 </nobr>
    <testchart></testchart>
    <monthpiechart></monthpiechart>
    <el-table
      v-loading="listLoading"
      :data="list.slice((currentPage-1)*pagesize,currentPage*pagesize)"
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
import  Testchart  from '@/components/charts'
import  Monthpiechart  from '@/components/charts/month/monthpiechart'
import { getChartdata } from '@/api/chart'
export default {
  components: {
    Testchart,
    Monthpiechart
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
      pagesize: 5, // 每页显示条数
      type:1, //el-option 默认参数
      typeOptions:[
     {label:'按日统计',value:0},
     {label:'按月统计',value:1},
     {label:'按年统计',value:2},
  ],
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getChartdata().then(response => {
        this.list = response.data.items
        console.log(this.list)
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
    },
    changepage: function(vID)
    {
      //   this.$router.push({ path:'/two.html'  })
      if(vID==0){ this.$router.push({path:'/test/Dailyreport'} )  }
      if(vID==1){ this.$router.push({path:'/test/Monthlyreport'} )  }   
    
    }
  }
}
</script>
