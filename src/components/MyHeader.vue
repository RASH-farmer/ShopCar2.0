<template>
  <div class="box">
    <div class="alert alert-info" :style="{backgroundColor:background,color}">{{title}}</div>
  </div>
</template>

<script>
export default {
  name: "MyHeader",
 props:{
    background:String,
    color:{
      type:String,
      default:'#fff'
    },
    title:{
      type:String,
      required:true
    }
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
 
};
</script>
<style lang="less" scoped>
  .alert-info {
  width: 100%;
  // height: 30px;
  font-size: 20px;
  text-align: center;
  font-weight: 700;
  // position: fixed;
}
</style>
