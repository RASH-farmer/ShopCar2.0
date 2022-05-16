<template>
  <div>
    <my-header title="购物车" color=""></my-header>
    <my-goods v-for="item in list" :key="item.id" :goods="item"></my-goods>
    <my-foot @changeAll="allFn" :list="list"></my-foot>
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader.vue";
import MyFoot from "@/components/MyFoot.vue";
import MyGoods from "@/components/MyGoods.vue";
// import MyCount from "@/components/MyCount.vue";
export default {
  components: { MyHeader, MyFoot, MyGoods },
  name: "WorkspaceJsonHomeView",
  async created() {
    let { data: res } = await this.$http.get("/api/cart");
    console.log(res.list);
    this.list = res.list;
  },
  data() {
    return {
      list: [],
    };
  },

  mounted() {},

  methods: {
    allFn(bool) {
      this.list.forEach((item) => (item.goods_state = bool));
    },
  },
};
</script>

<style lang="less">
</style>