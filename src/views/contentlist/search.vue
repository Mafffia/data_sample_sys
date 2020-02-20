<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="关键词(默认为空)">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="Activity time">
        <el-col :span="11">
          <el-date-picker v-model="form.date1" type="date" placeholder="Pick a date" style="width: 100%;" />
        </el-col>
        <el-col :span="2" class="line">-</el-col>
        <el-col :span="11">
          <el-date-picker v-model="form.date2" type="date" placeholder="Pick a date" style="width: 100%;" />
        </el-col>
      </el-form-item>
      <el-form-item label="加入缓存" >
        <el-switch v-model="form.delivery" />
      </el-form-item>
      <el-form-item label="Activity type">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="政治" name="type" />
          <el-checkbox label="军事" name="type" />
          <el-checkbox label="经济" name="type" />
          <el-checkbox label="体育" name="type" />
          <el-checkbox label="社会" name="type" />
          <el-checkbox label="娱乐" name="type" />
          <el-checkbox label="其他" name="type" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="Resources">
        <el-radio-group v-model="form.resource">
          <el-radio label="Sponsor" />
          <el-radio label="Venue" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Activity form">
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Search</el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>


export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '2019-01-01',
        date2: '',
        delivery: false,
        type: ["政治", "军事", "经济"],
        resource: '',
        desc: ''
      }
    }
  },
  created() {
    this.form.date2 = this.getNowFormatDate()
  },
  methods: {
    onSubmit() {
      this.$message('submit!')
      this.$router.push({name:'MessageList'})
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    },
    getNowFormatDate: function() {
       var date = new Date();
        var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = year + seperator1 + month + seperator1 + strDate;
        return currentdate;
    },
  },
   
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>